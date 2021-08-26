import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BASE_URL from '../../globals'
import Article  from '../components/Article'

export default function FootballArticles() {
  const [articles, setArticles] = useState({})

  const getArticles = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res)
    setArticles(res)
  }

  useEffect(() => {
    // getArticles()
  }, [])

  return(
    <div>
      {
        articles.map(article => (
          <Article {...article}/>
        ))
      }
    </div>
  )
}