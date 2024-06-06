import { useTheme } from './themeContext';
const CompanyCard = ({ companyName }) => {
    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-zinc-800' : 'text-zinc-100';
    return (
        <div className="p-4">
            <h2 className={`text-2xl font-semibold mb-2 ${textColor} mb-8`}>{companyName}</h2>
            <p className="mb-4">
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed
                arcu. Cras consequat.
            </p>
            <a href="#" className={`p-6 hover:underline ${textColor}`}>www.company.com</a>
        </div>
    );
};

export default CompanyCard;
