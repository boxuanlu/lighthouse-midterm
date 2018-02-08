//add users table
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').unique();
  /*    table.unique(['email']);*/
      table.string('address');

      table.timestamps();
    })
  ]);
};


exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
