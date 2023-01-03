module.exports = app => {
    const especialidade = require('../controller/especialidadeController')

    var router = require('express').Router()

    router.post('/', especialidade.create)

    router.get('/', especialidade.findAll)

    router.get('/:id', especialidade.findOne)

    router.put('/:id', especialidade.update)

    router.delete('/:id', especialidade.delete)

    app.use('/api/especialidade', router)
}