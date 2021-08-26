import React from 'react'

export default function Comment(props) {
  return (
    <div className='comment'>
      <input type="text" className='name-input' /> 
      <input type="text" className='text-input' />
      <button className='post-button'>Post</button>
    </div>
  )
}