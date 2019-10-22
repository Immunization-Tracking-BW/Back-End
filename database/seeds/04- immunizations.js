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

//Immunization Completed
const createFakeImmunizationDone = () => ({
  vaccine: typesofVaccines[getRandomInt(0, 7)],
  immunizationCompleted: true,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: faker.date.future(),
  child_id: getRandomInt(1, 5),
  provider_id: getRandomInt(1, 3)
});

//Immunization Over Due
const createFakeImmunizationOverDue = () => ({
  vaccine: typesofVaccines[getRandomInt(0, 7)],
  immunizationCompleted: false,
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  nextImmunizationDate: faker.date.recent(),
  child_id: getRandomInt(1, 5),
  provider_id: getRandomInt(1, 3)
});

exports.seed = async function(knex, Promoise) {
  const fakeImmunization = [];
  for (let i = 0; i < 15; i++) {
    fakeImmunization.push(createFakeImmunizationDone());
    fakeImmunization.push(createFakeImmunizationOverDue());
  }
  console.log(fakeImmunization);

  await knex("immunizations").insert(fakeImmunization);
};
