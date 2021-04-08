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

module.export = random
