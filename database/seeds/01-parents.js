const bcrypt = require("bcryptjs");
const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex("parents").insert([
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: "parent1@test.com",
      password: bcrypt.hashSync("1234")
    },
    {
      firstName: faker.name.lastName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: "parent2@test.com",
      password: bcrypt.hashSync("1234")
    },
    {
      firstName: faker.name.lastName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: "parent3@test.com",
      password: bcrypt.hashSync("1234")
    }
  ]);
};
