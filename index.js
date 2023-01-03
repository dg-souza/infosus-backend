const express = require('express')
const app = express()
const router = require('./src/controller')

const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})