import React from 'react'


const ChildComponent = React.memo((props) => {

  console.log("child Component go re-rendered again");

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )

}
);
export default ChildComponent
//React.memo -> wrap -> component-> component re-render tabhi hoge jab props change  honge nhi tp re render nhoi honga.

//if u r sending a  function then react.memo wont be able to save you (jab tak prop me value aayega tab tak hi rerender se ye bachha payega agr koi function sewnd hoga to react.memo nhi bachha payega)