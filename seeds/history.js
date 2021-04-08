
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('history').del()
    .then(function () {
      // Inserts seed entries
      return knex('history').insert([
        {id: 1, winner_id: 10, winner_pokemon_id: 20, loser_id: 25, loser_pokemon_id: 40}
      ]);
    });
};
