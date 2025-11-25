import { useEffect } from "react";

function MultiEffectComponent(){
  const[count , setCount]= useState(0);
  const[second, setSecond]= useState(0);

  useEffect(() => {
    console.log('Count changed:',count);
  }, [count])

  useEffect(()=>{
    const intervalId= setInterval(()=>{
setSecond(prevSeconds => prevSeconds+1);
    
  },1000 );
  
  return () => clearInterval(intervalId);
},[]);


return (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={()=>setCount(count+1)}>
    Increment count
  </button>
<h2>second: {second}</h2>
  </div>
)

}