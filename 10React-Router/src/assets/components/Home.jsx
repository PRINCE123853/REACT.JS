import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <div>
      Home Page
      <button onClick={handleClick}>Move to about page</button>
      
      {/* Nested routes yahan render honge */}
      <Outlet />
    </div>
  );
};

export default Home;
