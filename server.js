const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const { Post }  = require('./models/post')
const db = require('./db')



const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (request, response) => {
//   response.send({ msg: 'Server Running' })
// })

// //postArticles
// app.post('/articles', async (req, res) => {
//   try {
//     const articles = await new Post(req.body)
//     await articles.save()
//     return res.status(200).send(articles)
//   } catch (error) {
//     console.log(error)
//   }
// })

// //getArticles
// app.get('/articles', async (req, res) => {
//   try {
//     const articles = await Post.find()
//     // console.log(articles)
//     return res.json(articles)
//   } catch (error) {
//     console.log(error)
//   }
// })

// //getArticlesCategories
// app.get('/articles/:category', async (req, res) => {
//   try {
//     const articles = await Post.find({category: {$eq: req.params.category}})
//     // console.log(articles)
//     return res.json(articles)
//   } catch (error) {
//     console.log(error)
//   }
// })

// getComments
// app.get('/articles/:category/comments', async (req, res) => {
//   try {
//     const comments = await |||.find()
//     // console.log(articles)
//     return res.json(articles)
//   } catch (error) {
//     console.log(error)
    
//   }
// })

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req,res)=>{
    res.sendfile(path.join(`${__dirname}/client/build/index.html`))
  })
}

// End Your Code Here
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))


