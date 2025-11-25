// import React from "react";
// import hp from "../assets/hp.jpg";
// import "./UserCard.css"



// const UserCard = () => {
//   return (
//     <div className="user-container">
//       <p id="user-name">Samrat Singh</p>
//       <img id="user-img" src="{hp}" alt='Hate' /> 

//       <p id='user-Desc'>Samrat Prince Kumar Singh</p>
//     </div>
//   );
// };

// export default UserCard;
import React from "react";
import hp from "../assets/hp.jpg";
// import photo2 from "../assets/photo2.jpg";
// import photo3 from "../assets/photo3.jpg";
   import ".UserCard.css"


import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>

      <img id="user-img" src={props.image} alt={props.name} />

      <p>{props.desc}</p>
    </div>
  );
};

export default UserCard;