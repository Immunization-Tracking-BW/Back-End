const bcrypt = require("bcryptjs");
const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex("providers").insert([
    {
      orgName: "Valley Medical Center",
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      phoneNumber: faker.phone.phoneNumber(),
      email: "provider1@test.com",
      password: bcrypt.hashSync("1234")
    },
    {
      orgName: "Kaiser",
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      phoneNumber: faker.phone.phoneNumber(),
      email: "provider2@test.com",
      password: bcrypt.hashSync("1234")
    },
    {
      orgName: "Standford Health",
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      phoneNumber: faker.phone.phoneNumber(),
      email: "provider3@test.com",
      password: bcrypt.hashSync("1234")
    }
  ]);
};
