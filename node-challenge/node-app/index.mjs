import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'cadastro'
}

const connection = mysql.createConnection(config)

const sql = `insert into people (name) values ('Hely Sousa')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle</h1>`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})