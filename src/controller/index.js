const express = require('express')
const especialidadeRouter = require('./especialidadeController')

const router = express.Router()

router.use('/especialidade', especialidadeRouter)

module.exports = router