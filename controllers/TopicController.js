const post = require('../models/post')

<<<<<<< HEAD
const getBoxing = async (req, res)=>{
=======
const getBoxing = async (req, res) => {
>>>>>>> 1c9f7c136254eacbb470daaea7663370eaee817c
  const boxing = await BoxingArticle.find()
  res.json(boxing)
}

<<<<<<< HEAD
const getSoccer = async (req, res)=>{
=======
const getSoccer = async (req, res) => {
>>>>>>> 1c9f7c136254eacbb470daaea7663370eaee817c
  const soccer = await SoccerArticle.find()
  res.json(soccer)
}

<<<<<<< HEAD
const getFootball = async (req, res)=>{
=======
const getFootball = async (req, res) => {
>>>>>>> 1c9f7c136254eacbb470daaea7663370eaee817c
  const football = await FootballArticle.find()
  res.json(football)
}

const getArticleBoxing = (req, res) => {
  res.send({})
}

const getArticleFootball = (req, res) => {
  res.send({})
}

const getArticleSoccer = (req, res) => {
  res.send({})
}

module.exports = {
  getBoxing,
  getFootball,
  getSoccer,
  getArticleBoxing,
  getArticleFootball,
  getArticleSoccer
}
