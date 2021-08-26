import React, {useState, useEffect} from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import axios from 'axios'
import { BASE_URL } from './globals'

import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import SoccerArticles from './pages/SoccerArticles'
import FootballArticles from './pages/FootballArticles'
import BoxingArticles from './pages/BoxingArticles'

const App = () => {
  const [soccerArticles, setSoccer] = useState([])
  const [footballArticles, setFootball] = useState([])
  const [boxingArticles, setBoxing] = useState([])

  const getSoccer = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    // console.log(res)
    setSoccer(res)
  }
  const getFootball = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setFootball(res)
  }
  const getBoxing = async () => {
    const res = await axios.get(`${BASE_URL}/`)
    setBoxing(res)
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

            <Route exact path='/' component={() =>
              <Homepage soccerPosts={soccerArticles} footballposts={footballArticles} boxingPosts={boxingArticles}/>
              } />

            <Route path='/soccer' component={() =>
              <SoccerArticles soccerArticles={soccerArticles} />
            } />

            <Route path='/football' component={() =>
              <FootballArticles footballArticles={footballArticles} />
            } />

            <Route path='/boxing' component={() =>
              <BoxingArticles boxingArticles={boxingArticles} />
            } />

          </Switch>
        </main>
    </div>
  );
}

export default App;
