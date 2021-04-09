const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const { ModuleFilenameHelpers } = require("webpack");

function randomPokemon() {
    return Math.floor(Math.random() * 101)
}

function getPokemon(db = database) {
    const id = randomPokemon()
    return db('pokemon').where('id', id)
}

function getUsers(db = database) {
    return db('users').select()
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function battleResult(player1, player2, pokemon1, pokemon2, db = connection) {
    const number = randomNumber(1, 2)
    let result = {}
    if (number === 1) {
        result = {
            winner_id: player1,
            winner_pokemon_id: pokemon1,
            loser_id: player2,
            loser_pokemon_id: pokemon2
        }
    }
    else {
        result = {
            winner_id: player2,
            winner_pokemon_id: pokemon2,
            loser_id: player1,
            loser_pokemon_id: pokemon1
        }
    }
    return db('history')
        .insert(result)
        .then(() => { })
}

module.export = {
    battleResult,
    getPokemon,
    randomPokemon,
    getUsers

}
