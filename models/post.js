const { Schema } = require('mongoose')

const Post = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Post
