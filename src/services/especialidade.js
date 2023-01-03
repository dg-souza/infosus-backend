const Especialidade = require('../models/especialidade')

const findAll = async (req, res) => {
    const result = await Especialidade.findAll()

    res.json(result)
}

const create = async (req, res) => {
    await Especialidade.create({
        nomeEspecialidade: req.body.nomeEspecialidade
    }).then(() => {
        res.status(201).end()
    }).catch((error) => {
        if(error.name === 'SequelizeUniqueConstraintError')
            res.status('406').json({ report: 'Especialidade já cadastrada' }).end()
        
        res.json({ report: error })
    })
}

module.exports = { findAll, create }