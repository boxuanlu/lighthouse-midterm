// creates restaurants table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.string('username').notNullable();
    table.unique(['username']);
    table.string('password').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
