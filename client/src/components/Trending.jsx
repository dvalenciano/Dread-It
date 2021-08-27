import React from 'react'

const Trending = (props) => {
  
  return (
    <div className='trending'>
      <img src={`${props.image}`} alt="" />
      <h3>{props.title}</h3> 
    </div>
  )
}

export default Trending