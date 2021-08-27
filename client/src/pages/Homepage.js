import React from 'react'
import Trending from '../components/Trending'


const Homepage = ({soccerArticles, footballArticles, boxingArticles}) => {
  

  return(
    <div className='homepage'>
      <Trending post={soccerArticles}/>
      <Trending post={footballArticles[Math.ceil(Math.random()*footballArticles.length)]}/>
      <Trending post={boxingArticles[Math.ceil(Math.random()*boxingArticles.length)]}/>
    </div>
  )
}

export default Homepage