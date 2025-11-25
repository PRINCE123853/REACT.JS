import React, { useContext } from 'react';
import { ThemeContext, USerContext } from '../../App';

const ChildC = () => {
  const user = useContext(USerContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick() {
    if (theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  }

  return (
    <div>
      <button onClick={handleClick}>
        change theme
      </button>
      data: {user.name}
    </div>
  );
};

export default ChildC;
