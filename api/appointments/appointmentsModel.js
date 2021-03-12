const db = require('../../data/db-config');

const getAll = async () => {
    return await db('appointments')
};
  
const create = async (data) => {
    return db('appointments')
    .insert(data)
    .returning('*')
};

const update = async (id, data) => {
    return db('appointments')
    .where('id', id)
    .first()
    .update(data)
    .returning('*')
};

const remove = async (id) => {
    return db('appointments')
    .where('id', id)
    .del()
};


module.exports = {
    getAll,
    create,
    update,
    remove,
};
