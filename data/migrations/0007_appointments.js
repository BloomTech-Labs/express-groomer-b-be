exports.up = async (knex) => {
    await knex.schema.createTable('appointments', (table) => {
        table
          .increments('id')
          .datetime('some_date').notNull()
          .string('service_name').notNull()
          .onDelete('cascade')
          .onUpdate('cascade')
    })
};
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('appointments')
}