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
      "child.socialSecurityNumber"
    )
    .where("child.parent_id", parentid);
}

function getBy(id) {
  return db("child").where({ id });
}

function add(parentid, child) {
  const addChild = {
    ...child,
    parent_id: parentid
  };
  return db("child").insert(addChild);
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
