import './App.css'
import Card from './assets/components/Card'
import { useState } from 'react';

const App = () => {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karvadunga
  const [name,setName]= useState('');
  return (
    <div>

      <Card title="card1"name={name} setName={setName}></Card>
      <Card title="card2" name={name} setName={setName}></Card>
      <p>I am inside parent component and value of name is: {name} </p>
      </div>
  )
}

export default App 