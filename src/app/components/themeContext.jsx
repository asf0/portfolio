// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// // Define a debounce function
// const debounce = (func, delay) => {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// };

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   // Use the debounce function
//   const toggleTheme = debounce(() => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme); // Store theme preference
//   }, 300); // Adjust debounce delay as needed (e.g., 300 milliseconds)

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Use the debounce function
  const toggleTheme = debounce(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, 300);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

