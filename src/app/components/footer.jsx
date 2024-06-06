"use client";
import React from "react";

const Footer = () => {
    return (
        <footer className="">
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
                        <a href="/portfolio/uses" className="hover:underline">Uses</a>
                    </li>
                </ul>
                <span className="text-sm sm:text-center">© 2024 Ataide. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;