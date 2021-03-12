exports.seed = async function (knex) {
    await knex('appointments').insert([
      {
        id: 1,
        date: '11/12/2021',
        time: '11:00am',
      },
    ]);
  };