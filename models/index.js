const mongoose = require('mongoose')
const PostSchema = require('./post')

const SoccerArticle = mongoose.model('soccerArticles', PostSchema)
const FootballArticle = mongoose.model('footballArticles', PostSchema)
const BoxingArticle = mongoose.model('boxingArticles', PostSchema)

module.exports = {
  SoccerArticle,
  FootballArticle,
  BoxingArticle
}
