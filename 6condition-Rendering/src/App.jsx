import React from 'react'
import './App.css'
import LogoutBtn from './assets/components/LogoutBtn'
import LoginBtn from './assets/components/LoginBtn';
import {useState} from 'react'

const App = () => {
  const[isLoggedIn , setLoggedIn]= useState(true);


// if(!isLoggedIn){
//   return (
//     <LoginBtn/>
//   )
// }
// return (
//   <div>
//   <h1>Welcome Everyone to Cpdehelp we dev course</h1>
//   <div>
//   {isLoggedIn && <LogoutBtn/>}
//    </div>
//   </div>
// )





// return (
//   <div>
//     {isLoggedIn ? <LogoutBtn/> : <LoginBt/>} 

//   </div>
// )



//  if(isLoggedIn){
//   return (
//     <LogoutBtn/>
//   )
//  }
//  else{
//   return (
//     <LoginBtn/>
//   )
//  }
}

export default App