import React from 'react';
import ThemeSwithButton from './ThemeSwithButton';

const NavBar = () => {
  return (
    <div className=" dark:text-white dark:bg-slate-900 flex justify-between gap-2 p-2 w-full items-center">
      <div className="flex items-center cursor-pointer">
        <img
          className={`h-12 opacity-40 filter dark:invert dark:opacity-75`}
          alt="BookStore"
          src="./logo.svg"
        />
        <p className=" font-bold text-blue-700">
          BookSearch<span className="text-yellow-400">App.</span>
        </p>
      </div>
      <ThemeSwithButton />
    </div>
  );
};

export default NavBar;
