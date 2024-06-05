import { useTheme } from "./themeContext";
const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="md:w-auto"></div>
            <ul className={`flex space-x-4 p-2 rounded-full border ${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-zinc-800 border-white-500-30 shadow-zinc'}`}>
                <li>
                    <a href="/portfolio/" className={`px-4 py-2 rounded-full ${theme === 'light' ? 'hover:text-gray-900 hover:bg-gray-200' : 'hover:text-white hover:bg-gray-600'}`}>Home</a>
                </li>
                <li>
                    <a href="/portfolio/about" className={`px-4 py-2 rounded-full ${theme === 'light' ? 'hover:text-gray-900 hover:bg-gray-200' : 'hover:text-white hover:bg-gray-600'}`}>About</a>
                </li>
                <li>
                    <a href="/portfolio/projects" className={`px-4 py-2 rounded-full ${theme === 'light' ? 'hover:text-gray-900 hover:bg-gray-200' : 'hover:text-white hover:bg-gray-600'}`}>Projects</a>
                </li>
                <li>
                    <a href="/portfolio/uses" className={`px-4 py-2 rounded-full ${theme === 'light' ? 'hover:text-gray-900 hover:bg-gray-200' : 'hover:text-white hover:bg-gray-600'}`}>Uses</a>
                </li>
            </ul>
            <button
                onClick={toggleTheme}
                className={`ml-4 px-4 py-2 rounded-full ${theme === 'light' ? 'bg-gray-300 hover:bg-gray-400 text-gray-700' : 'bg-zinc-800 hover:bg-gray-500 text-gray-100'}`}
            >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
