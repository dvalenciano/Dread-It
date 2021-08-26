const post = require("../models/post")

const getBoxing = async (req, res)=>{
  const boxing = await BoxingArticle.find()
  res.json(boxing)
}

const getSoccer = async (req, res)=>{
  const soccer = await SoccerArticle.find()
  res.json(soccer)
}

const getFootball = async (req, res)=>{
  const football = await FootballArticle.find()
  res.json(football)
}

const getArticleBoxing = (req, res)=>{
  res.send({
    
  })
}

const getArticleFootball = (req, res)=>{
  res.send({
    
  })
}

const getArticleSoccer = (req, res)=>{
  res.send({
    
  })
}


module.exports = {
  getBoxing,
  getFootball,
  getSoccer,
  getArticleBoxing,
  getArticleFootball,
  getArticleSoccer
}