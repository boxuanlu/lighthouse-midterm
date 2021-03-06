//makes restaurants id need foreign constraint
exports.up = function(knex, Promise) {
return Promise.all([
    knex.schema.createTable('items', function(table) {
      table.increments();
      table.integer('restaurants_id');
      table.string('menu_section');
      table.string('name').notNullable();
      table.decimal('price');
      table.string('description')
      table.string('pictures');
      table.integer('likes');

    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('items')]);
};
