//makes items table
exports.up = function(knex, Promise) {
return Promise.all([
    knex.schema.table('items', function(table) {
      table.increment();
      table.integer('restaurant_id').unsigned();
      table.foreign('restaurant_id').references('restaurant_id');
      table.string('name');
      table.numeric('price');
      table.string('description');
      table.string('pictures');
      table.integer('likes');

    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('items')]);
};
