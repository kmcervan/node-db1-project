const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}

function get() {
    //select * from
    return db("accounts")
}

function getById(id) {
    // select * from ID
    return db("accounts").where("id",id).first()
}

function create(accounts) {
    // insert a new object
    return db("accounts").insert(accounts)
    .then(([id])=>{
        return db("accounts").where("id", id).first()
    })
}

function update(id, account) {
    // update object
    const accountId = id
    return db("accounts").where("id",id).update(account)
    .then(()=>{
        return db("accounts").where("id", accountId).first()
    })
}

function remove(id) {
    // delete object
    return db("accounts").where("id", id).del()
    .then(()=>{
        return db("accounts")
    })
}