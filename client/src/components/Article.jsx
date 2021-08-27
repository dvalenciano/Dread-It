import React from 'react'
import Comment from './Comment'

const Article = (props) => {
console.log(props)
  return (
    <div className='article'>
      <h2>{props.article.title}</h2>
      <img src={props.article.image} alt="" />
      <p>{props.article.content}</p>
      <Comment />
    </div>
  )
}

export default Article