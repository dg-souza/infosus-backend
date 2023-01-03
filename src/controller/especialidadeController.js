const db = require('../db/connection')
const Especialidade = db.especialidade
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
    await Especialidade.create({
        nomeEspecialidade: req.body.nomeEspecialidade
    }).then(() => {
        res.status(201).end()
    }).catch(() => {
        res.status(500)
    })
}

exports.findAll = async (req, res) => {
    await Especialidade.findAll()
        .then(data => {
            res.send(data)
        })
}

exports.findOne = async (req, res) => {
    await Especialidade.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        })
}

exports.update = async (req, res) => {
    await Especialidade.update(req.body, {
        where: { id: req.params.id }
    }).then(num => {
        if(num == 1) {
            res.status(201).end()
        }
    })
}

exports.delete = async (req, res) => {
    await Especialidade.destroy({
        where: { id: req.params.id }
    }).then(num => {
        if(num == 1) {
            res.status(201).end()
        }
    })
}