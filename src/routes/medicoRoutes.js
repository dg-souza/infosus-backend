module.exports = app => {
    const medico = require('../controller/medicoController')

    var router = require('express').Router()

    router.post('/', medico.create)

    router.get('/', medico.findAll)

    router.get('/:id', medico.findOne)

    router.put('/:id', medico.update)

    router.delete('/:id', medico.delete)

    app.use('/api/medico', router)
}