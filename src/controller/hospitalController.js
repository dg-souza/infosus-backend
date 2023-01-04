const db = require('../db/connection')
const Hospital = db.hospital
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
    await Hospital.create({
        nomeHospital: req.body.nomeHospital,
        logradouro: req.body.logradouro,
        cep: req.body.cep,
        numero: req.body.numero
    }).then(() => {
        res.status(201).end()
    }).catch(() => {
        res.status(500)
    })
}

exports.findAll = async (req, res) => {
    await Hospital.findAll()
        .then(data => {
            res.send(data)
        })
}

exports.findOne = async (req, res) => {
    await Hospital.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        })
}

exports.update = async (req, res) => {
    await Hospital.update(req.body, {
        where: { id: req.params.id }
    }).then(num => {
        if(num == 1) {
            res.status(201).end()
        }
    })
}

exports.delete = async (req, res) => {
    await Hospital.destroy({
        where: { id: req.params.id }
    }).then(num => {
        if(num == 1) {
            res.status(201).end()
        }
    })
}