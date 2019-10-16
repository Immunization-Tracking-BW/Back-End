const db = require("../database/db-config.js");

module.exports = {
  get,
  add,
  find,
  getBy
};

function get(userType) {
  return db(userType);
}

function add(userType, user) {
  return db(userType).insert(user);
}

function find(userType, filterBy) {
  console.log(userType);
  console.log(filterBy);
  return db(userType).where(filterBy);
}

function getBy(userType, id) {
  return db(userType).where({ id });
}
