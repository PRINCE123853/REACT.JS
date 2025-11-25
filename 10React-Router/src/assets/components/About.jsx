import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard'); 
  }

  return (
    <div>
      About
      <button onClick={handleClick}>Move to Dashboard page</button>
      
      {/* Nested routes yahan render honge */}
      <Outlet />
    </div>
  );
};

export default About;
