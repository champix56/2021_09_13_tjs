import React from 'react';

import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
     Demat breizh
     <hr/>
     <Button bgcolor="skyblue">
       <img src="/img/ok.png" alt="ok"/>
     </Button>
     <Button bgcolor="skyblue">
       <img src="/img/cancel.png" alt="cancel"/> 
       Cancel
     </Button>
    </div>
  );
}

export default App;
