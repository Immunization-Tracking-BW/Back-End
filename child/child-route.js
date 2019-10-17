const router = require("express").Router();
const Child = require("./child-model.js");

//Get all child of a parent

router.get("/:parentid/children", (req, res) => {
  const { parentid } = req.params;
  console.log(req);
  console.log(parentid);
  Child.get(parentid)
    .then(child => {
      res.status(200).json(child);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

router.post("/children", (req, res) => {
  const child = req.body;

  Child.add(child)
    .then(added => {
      res.status(200).json({ message: "Child has been added." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

module.exports = router;
