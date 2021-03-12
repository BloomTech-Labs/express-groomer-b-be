exports.up = async (knex) => {
    await knex.schema.createTable('appointments', (table) => {
      table.increments('id');
      table.string('date').notNull();
      table.string('time').notNull();
    });
  };
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('appointments');
  };
  