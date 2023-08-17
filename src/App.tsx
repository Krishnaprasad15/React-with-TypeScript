// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Style from './Components/Style';
// import Button from './Components/Button';
// import Input from './Components/Input';
// import Heading from './Components/Heading';
// import Oscar from './Components/Oscar';
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
      {/* <Oscar><Heading>Oscar goes to Leanardo Decaprio</Heading></Oscar> */}
      {/* <Button Handler={(event,id)=>{console.log('Button clicked',event,id)}}/> */}
      {/* <Input value='' ChangeHandler={(event)=>console.log(event.target.value)}/> */}
      <Style styles={{border:'1px solid black' , padding:'1rem'}}/>
    </div>
  );
}

export default App;
