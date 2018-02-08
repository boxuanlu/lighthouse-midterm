//add users table
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.incremnets();
      table.unique('username');
      table.string('password');
      table.unique('email');
      table.string('address');

      table.timestamps();
};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
