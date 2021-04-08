
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {id: 1, name: 'Pikachu', cp: 505},
        {id: 2, name: 'Squirtle', cp: 485},
        {id: 3, name: 'Charmander', cp: 470 },
        {id: 4, name: 'Bulbasaur', cp: 450 },
        {id: 5, name: 'Ivysaur', cp: 805 },
        {id: 6, name: 'Venusaur', cp: 1005 },
        {id: 7, name: 'Charmeleon', cp: 905 },
        {id: 8, name: 'Charizard', cp: 1400 },
        {id: 9, name: 'Wartortle', cp: 805 },
        {id: 10, name: 'Blastoise', cp: 1000 },
        {id: 11, name: 'Ekans', cp: 300 },
        {id: 12, name: 'Raichu', cp: 1200 },
        {id: 13, name: 'Clefairy', cp: 510 },
        {id: 14, name: 'Jigglypuff', cp: 500 },
        {id: 15, name: 'Zubat', cp: 150 },
        {id: 16, name: 'Meowth', cp: 305 }
      ]);
    });
};
