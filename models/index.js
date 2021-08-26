const mongoose = require('mongoose')
const PostSchema = require('./post')

const SoccerArticle = mongoose.model('soccerarticles', PostSchema)
const FootballArticle = mongoose.model('footballarticles', PostSchema)
const BoxingArticle = mongoose.model('boxingarticles', PostSchema)

module.exports = {
  SoccerArticle,
  FootballArticle,
  BoxingArticle
}
//update
