const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("parents").insert([
    {
      firstName: "Bob",
      lastName: "smith",
      phoneNumber: "222-222-2222",
      email: "fdafsd@gmail.com",
      password: bcrypt.hashSync("1234")
    }
  ]);
};
