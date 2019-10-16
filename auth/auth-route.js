const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./auth-model.js");

//Auth Routes

//Get all register users
router.get(`/:userType`, (req, res) => {
  const { userType } = req.params;

  Users.get(userType)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database" });
    });
});

router.post("/register/provider", (req, res) => {
  const provider = req.body;
  const { orgName, streetAddress, city, state, phoneNumber, email } = provider;
  const hash = bcrypt.hashSync(user.password);
  user.password = hash;

  if (!orgName || !streetAddress || !city || !state || !phoneNumber || !email) {
    return res.status(400).json({ messag: "Missing registeration fields. " });
  }
  Users.add("provider", provider)
    .then(provider => {
      res
        .status(200)
        .json({ message: `${provider.orgName}'s account has been created.` });
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating a new account." });
    });
});

module.exports = router;
