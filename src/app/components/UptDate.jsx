import { useTheme } from '@/app/components/themeContext';

export default function UpToDate() {
    const  theme  = useTheme();
    return (
        <section className="shadow-md p-4 rounded-sm mb-4 mt-10">
            <h2 className={`text-xl font-bold ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-100'}`}>Stay up to
                date</h2>
            <form className="flex space-x-2">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium sr-only"
                >
                    Enter your email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm block w-full sm:text-sm rounded-md bg-gray-200 text-gray-100 text-center dark:bg-zinc-700/20"
                    placeholder="you@email.com"
                />
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gray-600 text-gray-100 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-700"
                >
                    Subscribe
                </button>
            </form>
        </section>
    )
}