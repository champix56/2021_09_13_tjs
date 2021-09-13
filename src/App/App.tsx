import React from 'react';

import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
     Demat breizh
     <hr/>
     <Button classColor="primary" >
       <img src="/img/ok.png" alt="ok"/>
     </Button>
     <Button classColor="" >
       <img src="/img/cancel.png" alt="cancel"/> 
       Cancel
     </Button>
     <Button/>
    </div>
  );
}

export default App;
