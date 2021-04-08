
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {id: 1, name: 'Pikachu', cp: 505},
        {id: 2, name: 'Squirtle', cp: 485},
        {id: 3, name: 'Charmander', cp: 470 },
        {id: 4, name: 'Bulbasaur', cp: 450 }
      ]);
    });
};
