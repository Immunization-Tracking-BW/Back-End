const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getJwt = require("./auth-helpers.js");
const Users = require("./auth-model.js");

//Auth Routes

//Get all register users
router.get("/:userType", (req, res) => {
  const { userType } = req.params;

  Users.get(userType)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database" });
    });
});

router.post("/register/:userType", (req, res) => {
  const { userType } = req.params;
  const user = req.body;

  const validateRegisteration = () => {
    if (userType === "providers") {
      user.orgName &&
        user.streetAddress &&
        user.city &&
        user.state &&
        user.phoneNumber &&
        user.email &&
        user.password;
      return true;
    } else if (userType === "parents") {
      user.firstName &&
        user.lastName &&
        user.email &&
        user.phoneNumber &&
        user.password;
      return true;
    } else {
      return false;
    }
  };

  const hash = bcrypt.hashSync(user.password);
  user.password = hash;

  if (!validateRegisteration()) {
    return res.status(400).json({ message: "Missing registeration fields. " });
  }
  Users.add(userType, user)
    .then(added => {
      console.log(user);
      res.status(200).json({ message: "An account has been created." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating a new account." });
    });
});

router.post("/login/:userType", (req, res) => {
  const { userType } = req.params;
  let { email, password } = req.body;

  Users.find(userType, { email })

    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user);
        res.status(200).json({
          message: `${user.firstName || user.orgName} is logged in.`,
          token, user
        });
      } else {
        res.status(400).json({ message: "Email or password is invalid." });
      }
    })
    .catch(err =>
      res.status(500).json({ message: "Error accessing database." })
    );
});

module.exports = router;
