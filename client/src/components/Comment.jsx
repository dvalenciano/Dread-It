import React from 'react'

export default function Comment() {
  return (
    <div className='comment'>
      <input type="text" className='name-input' /> 
      <input type="text" className='comment-input' />
      <button className='post-button'>Post</button>
    </div>
  )
}