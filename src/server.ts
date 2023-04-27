import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import routes from './routes/index'

dotenv.config()

const server = express()

// Configurações do template
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

// Configuração da pasta para arquivos static
server.use(express.static(path.join(__dirname, '../public')))

// Rotas
server.use(routes)

server.use((req, res) => {
    res.render('pages/404')
})

server.listen(process.env.PORT)

