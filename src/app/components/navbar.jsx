// import { useTheme } from "./themeContext";
// const Navbar = () => {
//     const { theme, toggleTheme } = useTheme();
//     const navTextTheme = theme === 'light' ? 'hover:text-gray-900 hover:bg-gray-200' : 'hover:text-white hover:bg-gray-600';
//     return (
//         <nav className="container mx-auto p-4 flex justify-between items-center">
//             <div className="md:w-auto"></div>
//             <ul className={`flex space-x-4 p-2 rounded-full border ${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-zinc-800 border-white-500-30 shadow-zinc'}`}>
//                 <li>
//                     <a href="/" className={`px-4 py-2 rounded-full ${navTextTheme}`}>Home</a>
//                 </li>
//                 <li>
//                     <a href="/about" className={`px-4 py-2 rounded-full ${navTextTheme}`}>About</a>
//                 </li>
//                 <li>
//                     <a href="/projects" className={`px-4 py-2 rounded-full ${navTextTheme}`}>Projects</a>
//                 </li>
//                 <li>
//                     <a href="/uses" className={`px-4 py-2 rounded-full ${navTextTheme}`}>Uses</a>
//                 </li>
//             </ul>
//             <button
//                 onClick={toggleTheme}
//                 className={`ml-4 px-4 py-2 rounded-full ${theme === 'light' ? 'bg-gray-300 hover:bg-gray-400 text-gray-700' : 'bg-zinc-800 hover:bg-gray-500 text-gray-100'}`}
//             >
//                 {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//             </button>
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from "react";
import { useTheme } from "./themeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navTextTheme = theme === 'light' ? 'hover:text-gray-900 hover:bg-gray-200' : 'hover:text-white hover:bg-gray-600';

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex justify-between items-center w-full md:w-auto">
                <button
                    onClick={handleMenuToggle}
                    className={`md:hidden ${theme === 'light' ? 'text-gray-700' : 'text-gray-100'}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <ul className={`hidden md:flex space-x-4 p-2 md:space-x-4 rounded-full border ${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-zinc-800 border-white-500-30 shadow-zinc'}`}>
                <li>
                    <a href="/portfolio" className={`px-4 py-2 rounded-full ${navTextTheme}`}>Home</a>
                </li>
                <li>
                    <a href="/portfolio/about" className={`px-4 py-2 rounded-full ${navTextTheme}`}>About</a>
                </li>
                <li>
                    <a href="/portfolio/projects" className={`px-4 py-2 rounded-full ${navTextTheme}`}>Projects</a>
                </li>
                <li>
                    <a href="/portfolio/uses" className={`px-4 py-2 rounded-full ${navTextTheme}`}>Uses</a>
                </li>
            </ul>
            <div className="relative md:hidden">
                <div id="dropdown" className={`${isOpen ? 'block' : 'hidden'} fixed top-16 left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="/portfolio" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="/portfolio/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="/portfolio/projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
                        </li>
                        <li>
                            <a href="/portfolio/uses" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Uses</a>
                        </li>
                    </ul>
                </div>
            </div>
            <button
                onClick={toggleTheme}
                className={`ml-4 px-4 py-2 rounded-full ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-400 text-gray-700' : 'bg-zinc-800 hover:bg-gray-500 text-gray-100'}`}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </nav>
    );
};

export default Navbar;


