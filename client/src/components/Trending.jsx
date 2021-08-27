import React from 'react'

const Trending = ({post}) => {
  
  return (
    <div className='trending'>
      <img src={`${post.image}`} alt="" />
      <h3>{post.title}</h3> 
    </div>
  )
}

export default Trending