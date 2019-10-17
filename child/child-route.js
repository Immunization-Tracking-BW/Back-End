const router = require("express").Router();
const Child = require("./child-model.js");
const restricted = require("../auth/restricted-middleware.js");

//Get all child of a parent

router.get("/:parentid/children", restricted, (req, res) => {
  const { parentid } = req.params;

  Child.get(parentid)
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

router.get("/children/:childid", restricted, (req, res) => {
  const { childid } = req.params;

  Child.getBy(childid)
    .first()
    .then(child => {
      res.status(200).json(child);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

router.put("/children/:childid", restricted, (req, res) => {
  const { childid } = req.params;
  const changes = req.body;

  const { firstName, lastName, dateOfBirth, socialSecuirtyNumber } = changes;

  if (!firstName || !lastName || !dateOfBirth || !socialSecuirtyNumber) {
    return res.status(400).json({ message: "Missing fields." });
  }
  Child.update(childid, changes)
    .then(child => {
      res.status(200).json({ message: "Child has been updated." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

router.delete("/children/:childid", restricted, (req, res) => {
  const { childid } = req.params;

  Child.remove(childid)
    .then(child => {
      res.status(200).json({ message: "Child has been delete." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

router.post("/:parentid/children", restricted, (req, res) => {
  const child = req.body;
  const { parentid } = req.params;
  const { firstName, lastName, dateOfBirth, socialSecuirtyNumber } = child;

  if (!firstName || !lastName || !dateOfBirth || !socialSecuirtyNumber) {
    return res.status(400).json({ message: "Missing fields." });
  }
  Child.add(parentid, child)
    .then(added => {
      res.status(200).json({ message: "Child has been added." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

module.exports = router;
