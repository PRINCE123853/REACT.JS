import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div>
    {props.name}
    {props.children}
    </div>
  )
}



//we can also do like this direct tale as javascript and use
// const Card = ({children}) => { 
//   return (
//     <div>
//     {/* {props.name} */}
//     {children}
//     </div>
//   )
// }


export default Card