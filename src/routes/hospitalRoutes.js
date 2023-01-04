module.exports = app => {
    const hospital = require('../controller/hospitalController')

    var router = require('express').Router()

    router.post('/', hospital.create)

    router.get('/', hospital.findAll)

    router.get('/:id', hospital.findOne)

    router.put('/:id', hospital.update)

    router.delete('/:id', hospital.delete)

    app.use('/api/hospital', router)
}