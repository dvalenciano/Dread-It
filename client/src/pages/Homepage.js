import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Trending from '../components/Trending'
import BASE_URL from '../../globals'

export default function Homepage() {
  const [soccerPosts, setSoccer] = useState({})
  const [footballPosts, setFootball] = useState({})
  const [boxingPosts, setBoxing] = useState({})

  const getSoccer = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res)
    setSoccer(res)
  }
  const getFootball = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res)
    setFootball(res)
  }
  const getBoxing = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    console.log(res)
    setBoxing(res)
  }

  useEffect(() => {
    // getSoccer()
    // getFootball()
    // getBoxing()
  }, [])

  return(
    <div className='homepage'>
      <Trending {...soccerPosts[Math.ceil(Math.random()*10)]}/>
      <Trending {...footballPosts[Math.ceil(Math.random()*10)]}/>
      <Trending {...boxingPosts[Math.ceil(Math.random()*10)]}/>
    </div>
  )
}

