const db = require("../database/db-config.js");

module.exports = {
  get,
  getBy,
  add,
  update
};

function get(childid) {
  return db("immunizations")
    .innerJoin("child", "immunizations.child_id", "child.id")
    .select(
      "immunizations.id",
      "immunizations.vaccine",
      "immunizations.immunizationCompleted",
      "immunizations.date",
      "immunizations.location",
      "immunizations.grantPermission"
    )
    .where("immunizations.child_id", childid);
}

function getBy(id) {
  return db("immunizations").where({ id });
}

function add(childid, providerid, immunization) {
  const addImmunization = {
    ...immunization,
    child_id: childid,
    provider_id: providerid
  };

  return db("immunizations").insert(addImmunization);
}

function update(id, changes) {
  console.log(changes);
  return db("immunizations")
    .where({ id })
    .update(changes);
}
