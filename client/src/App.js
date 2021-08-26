import React from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import SoccerArticles from './pages/SoccerArticles'
import FootballArticles from './pages/FootballArticles'
import BoxingArticles from './pages/BoxingArticles'

function App() {

  return (
    <div className="App">
      <NavBar />
        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/soccer' component={SoccerArticles} />
            <Route path='/football' component={FootballArticles} />
            <Route path='/boxing' component={BoxingArticles} />
          </Switch>
        </main>
    </div>
  );
}

export default App;
