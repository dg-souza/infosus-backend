const db = require('../db/connection')
const Medico = db.medico
const Especialidade = db.especialidade
const Hospital = db.hospital
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
    await Medico.create({
        nomeMedico: req.body.nomeMedico,
        cpf: req.body.cpf,
        urlFoto: req.body.urlFoto,
        idEspecialidade: req.body.idEspecialidade,
        idHospital: req.body.idHospital
    }).then(() => {
            res.status(201).end()
        }).catch(() => {
            res.status(500)
        })
}

exports.findAll = async (req, res) => {
    const especialidades = await Especialidade.findAll()
    const hospitais = await Hospital.findAll()

    await Medico.findAll()
        .then(data => {
            const result = data.map(item => [{
                id: item.id,
                nomeMedico: item.nomeMedico, 
                cpf: item.cpf, 
                urlFoto: item.urlFoto, 
                nomeEspecialidade: especialidades.find(e => e.dataValues.id === item.idEspecialidade).nomeEspecialidade,
                nomeHospital: hospitais.find(e => e.dataValues.id === item.idHospital).nomeHospital
            }])
            res.send(result)
        })
}

exports.findOne = async (req, res) => {
    await Medico.findByPk(req.params.id)
        .then(async (data) => {
            const especialidade = await Especialidade.findOne({ where: { id: data.idEspecialidade } })
            const hospital = await Hospital.findOne({ where: { id: data.idHospital} })

            res.send({
                id: data.id,
                nomeMedico: data.nomeMedico,
                cpf: data.cpf,
                urlFoto: data.urlFoto,
                idEspecialidade: data.IdEspecialidade,
                nomeEspecialidade: especialidade.dataValues.nomeEspecialidade,
                nomeHospital: hospital.dataValues.nomeHospital
            })
        })
}

exports.update = async (req, res) => {
    await Medico.update(req.body, {
        where: { id: req.params.id }
    }).then(num => {
        if (num == 1) {
            res.status(201).end()
        }
    })
}

exports.delete = async (req, res) => {
    await Medico.destroy({
        where: { id: req.params.id }
    }).then(num => {
        if (num == 1) {
            res.status(201).end()
        }
    })
}