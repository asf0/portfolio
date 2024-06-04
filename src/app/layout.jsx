"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <html lang="en" className={inter.className}>
       <body className="flex flex-col min-h-screen">
         <div className={`${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-gray-300"} flex flex-col flex-grow`}>
           <header className={`${theme === "light" ? "bg-white shadow" : "bg-gray-800 shadow-lg"}`}>
           <nav className="container mx-auto p-4 flex justify-between items-center">
  <div className="md:w-auto"></div>
  <ul className={`flex space-x-4 p-2 rounded-full border ${theme === "light" ? "bg-gray-100 border-gray-300" : "bg-gray-700 border-gray-600"}`}>
    <li>
      <Link href="/portfolio/">
        <a className={`px-4 py-2 rounded-full ${theme === "light" ? "text-gray-700 hover:text-gray-900 hover:bg-gray-200" : "text-gray-300 hover:text-white hover:bg-gray-600"}`}>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio/about">
        <a className={`px-4 py-2 rounded-full ${theme === "light" ? "text-gray-700 hover:text-gray-900 hover:bg-gray-200" : "text-gray-300 hover:text-white hover:bg-gray-600"}`}>About</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio/projects">
        <a className={`px-4 py-2 rounded-full ${theme === "light" ? "text-gray-700 hover:text-gray-900 hover:bg-gray-200" : "text-gray-300 hover:text-white hover:bg-gray-600"}`}>Projects</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio/uses">
        <a className={`px-4 py-2 rounded-full ${theme === "light" ? "text-gray-700 hover:text-gray-900 hover:bg-gray-200" : "text-gray-300 hover:text-white hover:bg-gray-600"}`}>Uses</a>
      </Link>
    </li>
  </ul>
  <button onClick={toggleTheme} className={`ml-4 px-4 py-2 rounded-full justify-right ${theme === "light" ? "bg-gray-300 hover:bg-gray-400 text-gray-700" : "bg-gray-600 hover:bg-gray-500 text-gray-100"}`}>
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </button>
</nav>
          </header>
          
          <main className="container mx-auto p-4 flex-grow">
            {children}
          </main>
          <footer className={``}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium">
                <li>
                  <a href="/portfolio/" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                  <a href="/portfolio/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="/portfolio/projects" className="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                  <a href="/portfolio/uses  " className="hover:underline">Uses</a>
                </li>
              </ul>
              <span className="text-sm sm:text-center">© 2024 Ataide. All Rights Reserved.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

