import React from 'react';
import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeSwithButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    const parentDiv = document.querySelector('#parentDiv');
    if (!darkMode) {
      parentDiv.classList.add('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      parentDiv.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
    }
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`cursor-pointer text-2xl p-2 select-none ${darkMode && 'dark'} `}
      onClick={changeMode}
    >
      {darkMode ? <MdDarkMode className="dark:text-white" /> : <MdLightMode />}
    </div>
  );
};

export default ThemeSwithButton;
