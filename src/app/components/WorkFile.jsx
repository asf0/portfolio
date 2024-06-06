import { useTheme } from "@/app/components/themeContext";

export default function Work() {
    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-zinc-800' : 'text-zinc-100';
    const workTextColor = theme === 'light' ? 'text-gray-500' : 'text-gray-400';
    return (
        <section className="shadow-md p-4 rounded-sm mb-4 mt-10">
            <h2 className={`text-xl font-bold ${textColor}`}>Work</h2>
            <ul>
                <li className="flex items-center justify-between mt-4">
                    <a href="#" className="block hover:underline">Company 1</a>
                    <span
                        className={`text-sm ${workTextColor}`}>2020 - 2021</span>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#" className="block hover:underline">Company 2</a>
                    <span
                        className={`text-sm ${workTextColor}`}>2020 - 2021</span>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#" className="block hover:underline">Company 3</a>
                    <span
                        className={`text-sm ${workTextColor}`}>2020 - 2021</span>
                </li>
            </ul>
        </section>
    )
}