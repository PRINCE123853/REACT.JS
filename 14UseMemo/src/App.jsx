//matlab isme eak baar operation solve hokar store ho jata hai aur baad me provide hota rahta hai use time
import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");

    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  // let doubleValue=expensiveTask(input)// isme baar bar run hota tha aur upar me hamne eak lamba sa loop  chalaya hai time dilly hota tha but nichhe bale ke use se baar bar run hona hi nhi parega eak baar hoga aur jarurat par vahi dega

   let doubleValue=useMemo(()=> expensiveTask(input) , [input]);


  return (
    <div >
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div>Count: {count}</div>
      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double: {doubleValue}</div>
    </div>
  );
}

export default App;


//iska matlab hai ki ham jo input denge upar depend karat hai agar jo daal diye aur chane nhi kar rahe hai to aaram se increse karte chale ja sakte hai agar input change karenge to phir se eak bar increse me time leg aur pgirv se same speed me chlne lagega