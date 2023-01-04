const { Sequelize } = require('sequelize')

const database = new Sequelize('postgres://postgres:123@localhost:5432/infosus')

const db = {}

db.Sequelize = Sequelize
db.sequelize = database

db.especialidade = require('../models/especialidade')(database, Sequelize)
db.medico = require('../models/medico')(database, Sequelize)
db.hospital = require('../models/hospital')(database, Sequelize)

module.exports = db