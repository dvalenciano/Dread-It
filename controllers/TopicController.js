const post = require("../models/post")

const getBoxing = (req, res)=>{
  // const boxing = await Post.find()
  // res.json(boxing)
}

const getSoccer = (req, res)=>{
  // const soccer = await Post.find()
  // res.json(soccer)
}

const getFootball = (req, res)=>{
  const football = PostF.find()
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