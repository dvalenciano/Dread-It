import React from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='' component={} />
            <Route path='' component={} />
            <Route path='' component={} />
          </Switch>
        </main>
    </div>
  );
}

export default App;
