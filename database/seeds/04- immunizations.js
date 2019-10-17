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

const completed = [true, false];

const createFakeImmunization = () => ({
  vaccine: typesofVaccines[getRandomInt(0, 7)],
  immunizationCompleted: completed[getRandomInt(0, 1)],
  date: faker.date.past(),

  location:
    faker.address.streetAddress() +
    " " +
    faker.address.city() +
    ", " +
    faker.address.state(),
  grantPermission: false,
  child_id: getRandomInt(1, 5),
  provider_id: getRandomInt(1, 3)
});

exports.seed = async function(knex, Promoise) {
  const fakeImmunization = [];
  for (let i = 0; i < 15; i++) {
    fakeImmunization.push(createFakeImmunization());
  }

  await knex("immunizations").insert(fakeImmunization);
};
