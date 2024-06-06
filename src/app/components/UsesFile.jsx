import { useTheme } from '../components/themeContext';
import Lr from '../components/Lorem';

export default function Use({location}) {
    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-zinc-800' : 'text-zinc-100';

    return (
        <div className="flex rounded-sm shadow-sm mt-20">
            <div className="w-1/4">
                <h2 className={`text-lg font-semibold ${textColor}`}>{location}</h2>
            </div>
            <div className="w-3/4">
                {Array(4).fill(null).map((_, index) => (
                    <div className="mt-6" key={index}>
                        <h3 className={`text-xl font-bold ${textColor}`}>Item Name</h3>
                        <Lr />
                    </div>
                ))}
            </div>
        </div>
    );
};
    