import Image from "next/image";
import { useTheme } from '../components/themeContext';
export default function Skills() {
    const { theme } = useTheme();
    return (
        <section className="shadow-md p-4 rounded-sm mb-4 mt-10">
            <h2 className={`text-xl font-bold ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-100'}`}>Skills</h2>
            <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt numquam possimus fuga.
            </p>
            <div className={`mb-5 mt-5 ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-100'}`}>Python</div>
            <div className="flex items-center">
                <Image src="./python.png" alt="Python Logo" className="mr-2 rounded-lg" width={40} height={40}/>
                <div
                    className={`w-full h-6 border ${theme === 'dark' ? 'bg-zinc-800 border-zinc-500/40' : 'bg-zinc-200 border-zinc-900/10'}`}>
                    <div className="h-6 bg-teal-500" style={{width: '45%'}}></div>
                </div>
            </div>
            <div className={`mb-5 mt-5 ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-100'}`}>Java</div>
            <div className="flex items-center">
                <Image src="./java.png" alt="Java Logo" className="mr-2 rounded-lg" width={40} height={40}/>
                <div
                    className={`w-full h-6 border ${theme === 'dark' ? 'bg-zinc-800 border-zinc-500/40' : 'bg-zinc-200 border-zinc-900/10'}`}>
                    <div className="h-6 bg-teal-500" style={{width: '45%'}}></div>
                </div>
            </div>
            <div className={`mb-5 mt-5 ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-100'}`}>JavaScript</div>
            <div className="flex items-center">
                <Image src="./js.png" alt="JavaScript Logo" className="mr-2 rounded-lg" width={40} height={40}/>
                <div
                    className={`w-full h-6 border ${theme === 'dark' ? 'bg-zinc-800 border-zinc-500/40' : 'bg-zinc-200 border-zinc-900/10'}`}>
                    <div className="h-6 bg-teal-500" style={{width: '45%'}}></div>
                </div>
            </div>
        </section>
    )
}