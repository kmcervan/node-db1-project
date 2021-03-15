const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}

function get(){
    return db('accounts')
}

function getById(id){
    return db('accounts').where('id', id).first()
}

function create(account){
    return db('accounts').insert(account)
    .then(([id])=>{
        return db('accounts').where('id', id).first()
    })
}

function update(id, changes){
    const acctId = id
    return db('accounts').where('id', id).update(changes)
    .then(()=>{
        return db('accounts').where('id', acctId).first()
    })
}

function remove(id){
    return db('accounts').where('id', id).del()
    .then(()=>{
        return db('accounts')
    })
}