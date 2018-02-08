exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return Promise.all([
        knex('users').insert({
          username: 'labber',
          password: 'labber',
          email: 'labber@labber.ca',
          address: '123 labber ave, LabberVille, LabberLand, L4B 1A3'
        })
      ]);
    });
};

