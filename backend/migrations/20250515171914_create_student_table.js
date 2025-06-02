exports.up = function(knex) {
  return knex.schema.createTable('student', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.string('course').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('student');
};
