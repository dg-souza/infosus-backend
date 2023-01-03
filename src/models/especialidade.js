const Sequelize = require('sequelize')
const database = require('../db/connection')

const Especialidade = database.define('especialidades', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeEspecialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        timestamps: false
    }
)

Especialidade.sync()

module.exports = Especialidade