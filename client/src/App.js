import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import axios from 'axios'
import { BASE_URL } from './globals'

import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import SoccerArticles from './pages/SoccerArticles'
import FootballArticles from './pages/FootballArticles'
import BoxingArticles from './pages/BoxingArticles'

const App = () => {
  const [soccerArticles, setSoccer] = useState([])
  const [footballArticles, setFootball] = useState([])
  const [boxingArticles, setBoxing] = useState([])
  console.log(setSoccer)

  const getSoccer = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/articles/soccer`)
      console.log(res.data)
      setSoccer(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getFootball = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/articles/football`)
      console.log(res.data)
      setFootball(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getBoxing = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/articles/boxing`)
      console.log(res.data)
      setBoxing(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSoccer()
    getFootball()
    getBoxing()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Homepage
                soccerArticles={soccerArticles}
                footballArticles={footballArticles}
                boxingArticles={boxingArticles}
              />
            )}
          />

          <Route
            path="/soccer"
            component={() => <SoccerArticles soccerArticles={soccerArticles} />}
          />

          <Route
            path="/football"
            component={() => (
              <FootballArticles footballArticles={footballArticles} />
            )}
          />

          <Route
            path="/boxing"
            component={() => <BoxingArticles boxingArticles={boxingArticles} />}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
