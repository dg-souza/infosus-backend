const express = require('express')
const router = express.Router()
const { findAll, create } = require('../services/especialidade')

router.get('/pesquisar', async (req, res) => {
    await findAll(req, res)
})

router.post('/incluir', async (req, res) => {
    await create(req, res)
})

module.exports = router