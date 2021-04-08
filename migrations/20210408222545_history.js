
exports.up = function(knex) {
    return knex.schema.createTable('history', table => {
        table.increments('id').primary()
        table.integer('winner_id').references('users.id')
        table.integer('winner_pokemon_id').references('pokemon.id')
        table.integer('loser_id').references('users.id')
        table.integer('loser_pokemon_id').references('pokemon.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('history')
};
