const router = require("express").Router();

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
router.getBy("/immunization/:immunizationid", (req, res) => {
  const { immunizationid } = req.params;

  Immuization.getBy(immunizationid)
    .then(immuization => {
      res.status(200).json(immuization);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing the database." });
    });
});

//Add a child's record
router.post("/:childid/immunization/", (req, res) => {
  const { childid } = req.params;
  const immuization = req.body;

  const { vaccine, immunizationCompleted, date, location } = immuization;

  if (!vaccine || !immunizationCompleted || !date || !location) {
    res.status(400).json({ message: "Missing a field." });
  }

  Immuization.add(childid, immuization)
    .then(added => {
      res.status(200).json({ message: "Immunization has been added." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

//Update a child's record
router.put("/:childid/immunization/:immunizationid", (req, res) => {
  const { childid, immunizationid } = req.params;
  const changes = req.body;

  const {
    vaccine,
    immunizationCompleted,
    date,
    location,
    grantPermission
  } = immuization;

  if (
    !vaccine ||
    !immunizationCompleted ||
    !date ||
    !location ||
    !grantPermission
  ) {
    res.status(400).json({ message: "Missing a field." });
  }

  Immuization.update(childid, immunizationid, changes)
    .then(udpated => {
      res.status(200).json({ message: "Immunization has been updated." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

module.exports = router;
