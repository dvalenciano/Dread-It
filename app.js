const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const topicController = require('./controllers/TopicController')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
})

app.get('/boxing', topicController.getBoxing)

app.get('/football', topicController.getFootball)

app.get('/futbol', topicController.getFutbol)
















// End Your Code Here
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))
