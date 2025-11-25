import React from 'react'
import { useEffect , useState} from 'react'
import './App.css'



function App ()  {
const[count,setCount]= useState(0);

//this line comes from variation 4
const [total, setTotal]= useState(1);


  //first -> side-effect function 
// second -> clean-up function
//third -> comma seperated dependency

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  


//variation 1
//runs on every render

//this is run two times because in main.jsx (<StrictMode>)

  // useEffect(() => {
  //   alert("i will run on each render")
  // })
  


  //variation 2
  //that runs on only first render

  //  useEffect(() => {
  //   alert("i will run on each render")
  // }, [])



  //variation 3
//when count is updated
//yaha 1 baar update se pahle chal rhaa hai kyuki upar bale me ealk 0 zero value hai jo 1 baar kar de rha hai

//  useEffect(() => {
//     alert("i will run every time when count is updated")
//   }, [count])



//variation 4
//multipke dependency

//if you want this snipped then type useffectsnniped

// useEffect(() => {
//  alert("i will run every time when count/total is updated")
// }, [count , total])


//variation 5
//is baar let's add cleanup function

useEffect(() => {
  alert("Count is updated")
  return () => {
    alert("count is unmouted from UI") // jab purane bala count hatta hai tab ye triger hota hai  aur jab naya count aata hai to phir pahle bala chal jata hai
  }
}, [count,total])




  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
      setTotal(total+1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        update Count
      </button>
      <br />
      Count is: {count}

      <br />

 <button onClick={handleClickTotal}>
        update total
      </button>
      <br />
      Count is: {total}


     </div>
  )
}

export default App