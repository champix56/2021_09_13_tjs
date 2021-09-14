import React from 'react';

import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {
  // counter = 0
  constructor(props)
  {
    super(props);
    this.state={counter:0,name:'Alexandre'};
  }
  render() {
    return (
      <div className="App">
        Valeur du counter : {this.state.counter}
        <hr />
        <Button onClickEvent={ () => {
          // this.state.counter--;
          this.setState({counter:this.state.counter-1})
          console.log(this.state.counter);
        }}>soustraction</Button>
        <Button onClickEvent={() => {
          // this.state.counter++;
          this.setState({counter:this.state.counter+1})
          console.log(this.state.counter);
        }} bgColor="chartreuse">addition</Button>
      </div>
    );
  }
}

export default App;