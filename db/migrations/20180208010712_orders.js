// make orders table
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orders', function(table) {
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.decimal('subtotal', 14, 2);
      table.decimal('tax', 14, 2);
      table.decimal('total', 14, 2);
      table.integer('phone');
      table.string('comment');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orders')
  ]);
};
