// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import Oscar from './Components/Oscar';
// import ArrProp from './Components/ArrProp';?\
// import Status from './Components/Status';
// import { Person } from './Components/Person';
// import { Greet } from './Components/Greet';

function App() {
  // OBJECT
  // const PersonName={
  //   first:'Krishna',
  //   last:'Prasad'
  // }

  // ARRAY
  // const PersonArr=[
  //   {
  //     first:'a',
  //     last:'b'
  //   },
  //   {
  //     first:'c',
  //     last:'d'
  //   },
  //   {
  //     first:'e',
  //     last:'f'
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name='Krishna' msgCount={20} isLoggedIn={true}/> */}
      {/* <Person name={PersonName}/> */}
      {/* <ArrProp names={PersonArr}/> */}
      {/* <Status status='error'/> */}
      {/* <Heading>Heading prop</Heading> */}
      <Oscar><Heading>Oscar goes to ###</Heading></Oscar>
    </div>
  );
}

export default App;
