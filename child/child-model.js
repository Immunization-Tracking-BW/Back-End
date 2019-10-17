const db = require("../database/db-config.js");

module.exports = {
  get,
  add
};

function get(parentid) {
  return db("child")
    .innerJoin("parents", "child.parent_id", "parents.id")
    .select(
      "child.id",
      "child.firstName",
      "child.lastName",
      "child.dateOfBirth",
      "child.socialSecuirtyNumber"
    )
    .where("child.parent_id", parentid);
}

function add(child) {
  return db("child").insert(child);
}
