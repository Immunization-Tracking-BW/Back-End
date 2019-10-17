const db = require("../database/db-config.js");

module.exports = {
  get,
  getBy,
  add,
  update,
  remove
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

function getBy(id) {
  return db("child").where({ id });
}

function add(child) {
  return db("child").insert(child);
}

function update(id, changes) {
  return db("child")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("child")
    .where({ id })
    .del();
}
