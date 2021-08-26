import React from 'react'
import Comment from './Comment'

export default function Article(props) {
  return (
    <div className='article'>
      <h2>{props.title}</h2>
      <img src={props.image} alt="" />
      <p>{props.content}</p>
      <Comment />
    </div>
  )
}