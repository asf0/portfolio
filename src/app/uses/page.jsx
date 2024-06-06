"use client";
import { useTheme } from '../components/themeContext';
import Use from '../components/UsesFile';

export default function Uses() {
    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-zinc-800' : 'text-zinc-100';
    return (
        <main className="container mx-auto p-4 flex flex-col lg:flex-row lg:space-x-4">
        <div class="container mx-auto">
            <div>
                <h1 className={`text-4xl font-bold mb-4 ${textColor}`}>Software I use, Tools, and other things</h1>
                <p class="mb-10 md:w w-2/4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatum vel iure, blanditiis esse quasi ex temporibus cumque asperiores ab praesentium numquam nostrum incidunt? Eveniet aliquid animi deleniti voluptatibus! Sunt!</p>
            </div>
            <Use location="Workstation" />
            <Use location="Dev Tools" />
            <Use location="Design" />
            <Use location="Productivity" />
    </div>
    </main>
    )
};