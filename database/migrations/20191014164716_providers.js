exports.up = function(knex) {
  return knex.schema.createTable("providers", provider => {
    provider.increments();

    provider.string("orgName").notNullable();
    provider.string("streetAddress").notNullable();
    provider.string("city").notNullable();
    provider.string("state").notNullable();
    provider.string("phoneNumber").notNullable();
    provider
      .string("email")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("providers");
};
