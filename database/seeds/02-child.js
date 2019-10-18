const faker = require("faker");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const createFakeChild = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  dateOfBirth: faker.date.past(),
  socialSecurityNumber: faker.address.countryCode(),
  parent_id: getRandomInt(1, 3)
});

exports.seed = async function(knex, Promoise) {
  const fakeChildren = [];
  for (let i = 0; i < 5; i++) {
    fakeChildren.push(createFakeChild());
  }

  await knex("child").insert(fakeChildren);
};
