
exports.up = function(knex) {
  return knex.schema.createTable('pokemon', table => {
      table.increments('id')
      table.string('name')
      table.integer('cp')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemon')
};
