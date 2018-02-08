exports.seed = function(knex, Promise) {
      return Promise.all([
        knex('restaurants').insert({
          username: 'kanhamrestaurants',
          password: 'www4137757',
          email: 'boxuan@ualberta.ca'}),
        ]);
    };

