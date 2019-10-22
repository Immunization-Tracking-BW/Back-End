exports.up = function(knex) {
  return knex.schema.createTable("immunizations", immu => {
    immu.increments();

    immu.string("vaccine").notNullable();
    immu
      .boolean("immunizationCompleted")
      .defaultTo("false")
      .notNullable();
    immu.string("date").notNullable();
    immu.string("location").notNullable();
    immu
      .boolean("grantPermission")
      .defaultTo("false")
      .notNullable();
    immu.string("nextImmunizationDate");
    immu
      .integer("child_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("child")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    immu
      .integer("provider_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("providers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("immunizations");
};
