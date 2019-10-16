exports.up = function(knex) {
  return knex.schema.createTable("parents", parent => {
    parent.increments();

    parent.string("firstName").notNullable();
    parent.string("lastName").notNullable();
    parent.string("phoneNumber").notNullable();
    parent
      .string("email")
      .notNullable()
      .unique();
    parent.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("parents");
};
