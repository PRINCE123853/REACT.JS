import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount, 
} from "./assets/features/counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  
  function handleDecrementClick() {
    dispatch(decrement());
  }
  
  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementAmountClick() { 
    dispatch(incrementByAmount(amount) );
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncrementAmountClick}>Add Amount</button>
    </div>
  );
};

export default App;
//yaha handle cloick par click hone se increment click hua aur vo increment pahle store me gya vaha se vo phir slice me gya aur vaha ka operation lagakar value change kar diya phir vo isi page me aaya aur dekha ki line no 12 mme vo value use hua hai phir dekha vo inche prince hua hai to aeise hi chala


//HW asdyncthunk red \\

//sequence Action > Reducer > Slice > store > state 
//onclick> handleclick> action sisplay>store > reducer > logic excute > again go in store > stack update > visual on UI
