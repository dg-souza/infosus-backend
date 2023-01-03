const { Sequelize } = require('sequelize')

const database = new Sequelize('postgres://postgres:123@localhost:5432/infosus')

module.exports = database