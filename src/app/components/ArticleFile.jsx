import Lr from "@/app/components/Lorem";
import { useTheme } from "@/app/components/themeContext";

export default function Article({ ArticleName, date }) {
    const { theme, toggleTheme } = useTheme();
    const textColor = theme === 'light' ? 'text-zinc-800' : 'text-zinc-100';
    return (
        <article className="mb-4">
            <span className='text-xs mb-5'>{date}</span>
            <h2 className={`text-xl font-bold mt-5 ${textColor}`}>{ArticleName}</h2>
            <Lr/>
            <a href="#" className="text-sm text-teal-500 hover:underline">Read article &gt;</a>
        </article>
    )
}
