const express = require('express');
const router = express.Router();
const Accounts = require('./accounts-model');

router.get('/', (req, res) => {
    Accounts.get()
    .then(accounts => {
        res.status(200).json(accounts)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Accounts.getById(id)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

router.post('/', (req, res) => {
    const newAcct = req.body
    Accounts.create(newAcct)
    .then(acct => {
        res.status(201).json(acct)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Accounts.update(id, changes)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

router.delete('/:id', (req, res) => {
    const deleted = req.params.id
    Accounts.remove(deleted)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

module.exports = router;