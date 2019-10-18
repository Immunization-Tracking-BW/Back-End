const router = require("express").Router();
const Provider = require("./provider-model.js");
const restricted = require("../auth/restricted-middleware.js");

//Get all child link to provider

router.get("/:providerid/children", (req, res) => {
  const { providerid } = req.params;

  Provider.get(providerid)
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database. " });
    });
});

module.exports = router;
