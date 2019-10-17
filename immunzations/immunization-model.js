const db = require("../database/db-config.js");

module.exports = {
  get,
  getBy,
  add,
  update
};

function get(childid) {
  return db("immunizations")
    .innerJoin("child", "child.id", "immunizations.child_id")
    .select(
      "immunizations.id",
      "immunizations.vaccine",
      "immunizations.immunizationCompleted",
      "immunizations.date",
      "immunizations.location",
      "immunizations.grantPermission"
    )
    .where(childid, "immunizations.child_id");
}

function getBy(id) {
  return db("immunizations").where({ id });
}

function add(childid, immunization) {
  const addImmunization = {
    ...immunization,
    child_id: childid
  };
  return db("immunizations").insert(addImmunization);
}

function update(childid, id, changes) {
  const addChanges = {
    ...changes,
    child_id: childid
  };
  return db("immunizations")
    .insert(addChanges)
    .where({ id });
}
