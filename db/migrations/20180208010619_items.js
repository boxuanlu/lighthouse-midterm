//makes items table
exports.up = function(knex, Promise) {
return Promise.all([
    knex.schema.createTable('items', function(table) {
      table.increments();
      table.integer('restaurants_id').references('id').inTable('restaurants');
      table.string('name');
      table.decimal('price');
      table.string('description', 14, 2);
      table.string('pictures');
      table.integer('likes');

    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('items')]);
};
