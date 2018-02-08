



// make order items link table
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('order-items', function(table) {
      table.increments();
      table.integer('items_id').unsigned();
      table.foreign('items_id').references('items.id');
      table.integer('orders_id').references('id').inTable('orders');
      table.integer('quantity');

    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order-items')
  ]);
};
