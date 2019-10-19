exports.up = function(knex) {
  return knex.schema.createTable("child", child => {
    child.increments();

    child.string("firstName").notNullable();
    child.string("lastName").notNullable();
    child.string("dateOfBirth").notNullable();
    child.string("socialSecuirtyNumber").notNullable();
    child
      .integer("parent_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("parents")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("child");
};
