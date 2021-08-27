import React from 'react'

const Trending = (props) => {
  
  return (
    <div className='trending'>
      <img className = 'image' src={props.post.image} alt="" />
      <h3>{props.post.title}</h3> 
    </div>
  )
}

export default Trending