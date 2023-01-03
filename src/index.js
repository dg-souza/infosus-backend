const express = require('express')
const app = express()
const db = require('./db/connection')

const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.sequelize.sync()
    .then(() => {
        console.log('Conectado ao banco')
    }).catch((err) => {
        console.log('Erro ao conectar ao banco: ', err.message)
    })

require('./routes/especialidadeRoutes')(app)
require('./routes/medicoRoutes')(app)

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})