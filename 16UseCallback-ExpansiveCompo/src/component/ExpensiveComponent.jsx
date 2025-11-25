import React, { useState, useCallback, useRef, useEffect } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += 1;
    }
    return result;
  }, []); // dependency empty hi rakho// agar yaha count rahta to jab count update hota tabhi yr recreatew rahta otherwise ye constant rahta

// setCount(prev => prev + 1) ka functional updater hamesha latest value lega.

// Dependency array empty hone se handleClick ka reference constant rahega.

// ChildComponent me prop ka reference change nahi hoga, isliye wo unnecessary re-render nahi karega.




  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveCalculation) {
        console.log("Function not re-created");
      } else {
        console.log("Function got re-created");
      }
    }
    previousFunction.current = expensiveCalculation;
  }, [expensiveCalculation]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ExpensiveComponent;



//usememo ka use re run se bachane ke liye hota hai rerender to hote hi rahta hi but usecallback ka use rerensder se bachane ke liye kkarte hai run to hota hi rahta hai. usme value ko memorise karte hai but isme function ke value ko memorise lkarte hai


