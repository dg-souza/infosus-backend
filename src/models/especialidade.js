module.exports = (sequelize, Sequelize) => {
    const Especialidade = sequelize.define('especialidades', {
        nomeEspecialidade: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    })

    return Especialidade
}