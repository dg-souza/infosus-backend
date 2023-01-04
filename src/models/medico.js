const Especialidade = require('./especialidade')

module.exports = (sequelize, Sequelize) => {
    const Medico = sequelize.define('medicos', {
        nomeMedico: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING(11),
            allowNull: false,
        },
        urlFoto: {
            type: Sequelize.STRING,
            allowNull: true
        },
        idEspecialidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idHospital: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    },
        {
            timestamps: false
        })

    return Medico
}