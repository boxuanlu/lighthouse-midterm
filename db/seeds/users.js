exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function() {
      return Promise.all([
        knex('items').insert({ name: 'Buffalo Bleu', price: 7.99, description: 'chopped romaine & iceberg blend, all-natural chicken, original buffalo new york spicy sauce, grape tomatoes, banana peppers, tortilla strips, bleu cheese, suggested dressing: chunky bleu cheese', pictures: '/pictures/10-Buffalo.png', likes: 9 })

      ]);
    });
};
