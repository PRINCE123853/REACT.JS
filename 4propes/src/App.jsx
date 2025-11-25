import {useState} from 'react'
import './App.css'
import Card from './assets/components/Card'
import Button from './assets/components/button';

function App(){
  const[count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <Button handleClick={handleClick} text="click me">

<h1>{count} </h1>

      </Button>
     {/* <Card name="love prince">
      <h1>Best WEB DEV course</h1>
      <p>Trying to be consistent in this</p>
      <p>Will complete the course soon</p>
     </Card>
     <Card children="mai eak children hu"> 

      Hello bhai kaisa hai khelega free fire!
     </Card> */}
    </div>
  )
}

export default App

      {/* priority se hello bhaoi bala aaya agar ye nhi hota to jo naam ke sath ham banaye ahi vo aata */}