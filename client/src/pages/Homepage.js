import React from 'react'
import Trending from '../components/Trending'

const Homepage = ({ soccerArticles, footballArticles, boxingArticles }) => {
  return (
    <div className="homepage">
      <Trending post={soccerArticles[0]} />
      <Trending post={footballArticles[0]} />
      <Trending post={boxingArticles[0]} />
    </div>
  )
}

export default Homepage
