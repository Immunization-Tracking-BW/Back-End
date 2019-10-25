const faker = require("faker");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const typesofVaccines = [
  "Measles",
  "Rotavirus",
  "Smallpox",
  "Chickenpox",
  "Yellow Fever",
  "Heapatitis A",
  "Polio",
  "Rabies"
];

const fakerDate = [faker.date.recent(), faker.date.future()];

//Immunization Completed
const childOne = add => ({
  vaccine: typesofVaccines[0 + add],
  immunizationCompleted: false,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: fakerDate[getRandomInt(0, 1)],
  child_id: 1,
  provider_id: 1
});

const childTwo = add => ({
  vaccine: typesofVaccines[0 + add],
  immunizationCompleted: false,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: fakerDate[getRandomInt(0, 1)],
  child_id: 2,
  provider_id: 2
});

const childThree = add => ({
  vaccine: typesofVaccines[0 + add],
  immunizationCompleted: false,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: fakerDate[getRandomInt(0, 1)],
  child_id: 3,
  provider_id: 2
});

const childFour = add => ({
  vaccine: typesofVaccines[0 + add],
  immunizationCompleted: false,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: fakerDate[getRandomInt(0, 1)],
  child_id: 4,
  provider_id: 3
});

const childFive = add => ({
  vaccine: typesofVaccines[0 + add],
  immunizationCompleted: false,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: fakerDate[getRandomInt(0, 1)],
  child_id: 5,
  provider_id: 1
});

exports.seed = async function(knex, Promoise) {
  const fakeImmunization = [];
  for (let i = 0; i < 8; i++) {
    fakeImmunization.push(childOne(i));
    fakeImmunization.push(childTwo(i));
    fakeImmunization.push(childThree(i));
    fakeImmunization.push(childFour(i));
    fakeImmunization.push(childFive(i));
  }
  await knex("immunizations").insert(fakeImmunization);
};
