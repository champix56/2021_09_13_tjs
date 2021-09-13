import React from 'react';

import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
     Demat breizh
     <hr/>
     <Button bgColor="green"
      onClickEvent={(arg)=>{
        console.trace(arg);
      }}
     >
       <img src="/img/ok.png" alt="ok"/>
     </Button>
     <Button bgColor="tomato"  
     style={{textDecoration:'underline'}} 
     onClickEvent={(arg)=>{
       console.error('y\'a une erreur', arg)
     }}
     >
       <img src="/img/cancel.png" alt="cancel"/> 
       Cancel
     </Button>
     <Button></Button>
    </div>
  );
}

export default App;
