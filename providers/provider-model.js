const db = require("../database/db-config.js");

module.exports = {
  get
};

//Get all child in provider

function get(id) {
  return db("child")
    .innerJoin("immunizations", "immunizations.child_id", "child.id")
    .innerJoin("providers", "providers.id", "immunizations.provider_id")
    .distinct(
      "child.id",
      "child.firstName",
      "child.lastName",
      "child.dateOfBirth",
      "child.socialSecurityNumber"
    )
    .where("providers.id", id);
}
