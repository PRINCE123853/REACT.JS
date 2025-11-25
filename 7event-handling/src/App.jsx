
import './App.css'

function App() {
  function handleClick(){
alert("I am clinked")
  }

  function handleMouseover(){
  alert("mouse on para");
  }

function handleInputChange(e){
//  console.log("input me value change");
console.log("value till now: " , e.target.value);
}
function handleSunmit(e){
      e.preventDefault(); //is type ka bahut sara function hota hai explore karo
      //i am writing my custum behavior down
      alert("form submit kar du kya");
}

  return (
   <div>





{/* ye bala code kabhi nhi likhna hai ise kahte hai emmidiate invocation bin abutton click kiye hi show ho jayega */}
{/* <button onClick={alert("Button click hua h")}>
  Click me
</button> */}

<button onClick={()=>{alert("button clicked")}}>
  Click me
</button>


{/* <form onSubmit={handleSunmit}>
<input type="text" onChange={handleInputChange} />
<button type="submit">submit</button>
</form> */}




    {/* <p onMouseOver={handleMouseover} style={{color:"red", border:"2px solid white"}}>
      I am para
    </p>
<button onClick={handleClick}>
  click me
  </button>    */}
</div>
    
  )
}

export default App
