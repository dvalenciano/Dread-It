import React from 'react'
import Comment from './Comment'

const Article = ({title, image, content}) => {

  return (
    <div className='article'>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{content}</p>
      <Comment />
    </div>
  )
}

export default Article