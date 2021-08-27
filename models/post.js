const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const postSchema = new Schema(
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
    },
    category: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)
// export default Post
module.exports = {
  Post
}
