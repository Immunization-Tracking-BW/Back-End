const router = require("express").Router();
const restricted = require("../auth/restricted-middleware.js");
const Immuization = require("./immunization-model.js");

//Get all records for a child
router.get("/:childid/immunization", (req, res) => {
  const { childid } = req.params;

  Immuization.get(childid)
    .then(immunzations => {
      res.status(200).json(immunzations);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

//Get a record for a child
router.get("/immunization/:immunizationid", (req, res) => {
  const { immunizationid } = req.params;

  Immuization.getBy(immunizationid)
    .first()
    .then(immuization => {
      res.status(200).json(immuization);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing the database." });
    });
});

//Add a child's record
router.post("/:childid/immunization/:providerid", (req, res) => {
  const { childid, providerid } = req.params;
  const immuization = req.body;

  const { vaccine, date, location, immunizationCompleted } = immuization;

  if (!vaccine || !date || !location || !immunizationCompleted) {
    res.status(400).json({ message: "Missing a field." });
  }

  Immuization.add(childid, providerid, immuization)
    .then(added => {
      res.status(200).json({ message: "Immunization has been added." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

//Update a child's record
router.put("/immunization/:immunizationid", (req, res) => {
  const { immunizationid } = req.params;

  const changes = req.body;
  const { vaccine, immunizationCompleted, date, location } = changes;

  if (!vaccine || !immunizationCompleted || !date || !location) {
    res.status(400).json({ message: "Missing a field." });
  }

  Immuization.update(immunizationid, changes)
    .then(udpated => {
      res.status(200).json({ message: "Immunization has been updated." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

module.exports = router;
