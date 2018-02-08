// creates restaurants table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.unique('username');
    table.string('password');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
