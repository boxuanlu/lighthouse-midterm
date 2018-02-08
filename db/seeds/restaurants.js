exports.seed = function(knex, Promise) {
  return knex('restaurants').del()
    .then(function() {
      return Promise.all([
        knex('restaurants').insert({
          username: 'kanhamrestaurants',
          password: 'www4137757',
          email: 'boxuan@ualberta.ca'}),
        ]);
      });
    };

