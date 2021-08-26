import React from 'react'

export default function Trending(props) {
  
  return (
    <div className='trending'>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3> {/*needs anchor tag for link? */}
    </div>
  )
}