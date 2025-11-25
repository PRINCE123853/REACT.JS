import React from 'react'

const Button=(props)=> {
  return (
    <div>
      {props.children}
   <Button  onClick={props.handleClick}> {props.text}
   </Button>
   </div>
  )
}

export default Button