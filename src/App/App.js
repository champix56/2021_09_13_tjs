import React, { Component } from 'react';
import './App.css'
import Tchat from './pages/Tchat/Tchat';
import * as REST_CONFIG from './config/config'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], messages: [] }
  }
  componentDidMount() {
    setInterval(() => {
      fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.users, { method: 'GET' })
        .then(flux => flux.json())
        .then(arr => {
          this.setState({ users: arr });
          return arr;
        })
    }, 1000
    )
  }
  render() {
    return (
      <>
        <div>
          {JSON.stringify(this.state)}
        </div>
        <div className="App">
          <Tchat users={this.state.users} />
        </div>
      </>
    );
  }
}

export default App;
