import React from 'react'
import Comment from './Comment'

const Article = (props) => {

  return (
    <div className='article'>
      <h2>{props.title}</h2>
      <img src={props.image} alt="" />
      <p>{props.content}</p>
      <Comment />
    </div>
  )
}

export default Article