exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.string('email').primary();
    table.string('password');
    table.string('first_name');
    table.string('last_name');
    table.boolean('email_verified');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.raw('DROP TABLE IF EXISTS users CASCADE');
};
