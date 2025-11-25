import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  // let val = 1; //is type se value percist nhi karti hai , bar bar 2 hi print hoga , value percist karane ke liye hi useref ka use karte hai 

  let val=useRef(0);//iske vajah se rerender nhi hota hai

let btnRef= useRef();


  function handleIncrement() {
    // val = val + 1;
    // console.log("value of val:" , val);
    val.current=val.current+1;
    console.log("value of val:" , val.current);
    setCount(count + 1);
  }

  //it runs at every render
  useEffect(() => {
    console.log("again render:");
  });

  function changeColor(){
  btnRef.current.style.backgroundColor="red";
  }

  return (

    <div>
      <button
      ref={btnRef}
      onClick={handleIncrement}>Increment</button>
      <br />
            <br />
      <button onClick={changeColor}>
        Change color of 1st Button
      </button>

      <div>Count:{count}</div>
    </div>
  );
}

export default App;
