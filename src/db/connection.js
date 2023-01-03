const { Sequelize } = require('sequelize')

const database = new Sequelize('postgres://postgres:123@localhost:5432/infosus')

const db = {}

db.Sequelize = Sequelize
db.sequelize = database

db.especialidade = require('../models/especialidade')(database, Sequelize)

module.exports = db