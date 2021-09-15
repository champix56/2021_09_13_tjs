import React, { Component } from 'react';
import './App.css'
import Auth from './pages/Auth/Auth';
import Tchat from './pages/Tchat/Tchat';
import store from './store/store'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              Hello et bienvenue a tous sur ce chat React
              <Link to="Auth">Connectez vous maintenant</Link>
            </Route>
            <Route path="/Auth">
              <Auth />
            </Route>
            <Route path="/Tchat/:id">
              <Tchat/>
            </Route>
            <Route path="/">
              Error 404
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
