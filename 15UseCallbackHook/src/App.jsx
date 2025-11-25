//use= taki function dubara se create na ho rerender hone par


import "./App.css";
import { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);


  //agar aeise function banayenge to rerender hoga
  // function handleClick(){
  //   setCount(count+1);
  // }

  //is tarah se useCallback ke andar function ko likhkar hamne rerender hone se bacha liya
  const handleClick= useCallback(()=>{
    setCount(count=>count+1);
  },[]);
// setCount(prev => prev + 1) ka functional updater hamesha latest value lega.

// Dependency array empty hone se handleClick ka reference constant rahega.

// ChildComponent me prop ka reference change nahi hoga, isliye wo unnecessary re-render nahi karega.

  //complete is 
  // useCallback(
  //   () => {
  //     first
  //   },
  //   [second],
  // )
  



  return (
    <div>
      <div>Count:{count}</div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <div>
        <ChildComponent buttonName="click me"
        handleClick={handleClick}
        >
          </ChildComponent>
          {/* basically jab tak ham aha ka props change nhi karenge tab tak rerender nhi hoga bus eak baar hokar hi aaram se click karke work kar sakte hai but agr ham bichh me ise change karte hai to phir ye rerender hoga eak baar aur phitr aaram se clik button kaam karega  */}
        
      </div>
    </div>
  );
}

export default App;


//reason for re-rendering after providing function is "dubara run hone par function ka refrence change ho jata hai jisse system ko lagt hai ki dusr5a porops aaya hai thats the reason "
//iske liye hame function ka nya refrtence banne se rokna hoga kuchh karke ise frize karna hoga