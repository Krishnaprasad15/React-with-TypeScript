// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ArrProp from './Components/ArrProp';
// import { Person } from './Components/Person';
// import { Greet } from './Components/Greet';

function App() {
  const PersonName={
    first:'Krishna',
    last:'Prasad'
  }
  const PersonArr=[
    {
      first:'a',
      last:'b'
    },
    {
      first:'c',
      last:'d'
    },
    {
      first:'e',
      last:'f'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='Krishna' msgCount={20} isLoggedIn={true}/> */}
      {/* <Person name={PersonName}/> */}
      <ArrProp names={PersonArr}/>
    </div>
  );
}

export default App;
