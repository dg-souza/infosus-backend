module.exports = (sequelize, Sequelize) => {
    const Hospital = sequelize.define('hospitais', {
        nomeHospital: {
            type: Sequelize.STRING,
            allowNull: false
        },
        logradouro: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false
        },
        numero: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
        {
            timestamps: false
        })

    return Hospital
}