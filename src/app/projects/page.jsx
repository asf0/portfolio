"use client";
import CompanyCard from '../components/companyCard';
import { useTheme } from '../components/themeContext';

export default function Projects() {
    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-zinc-800' : 'text-zinc-100';
    return (
        <main className="container mx-auto p-4 flex flex-col">
            <section className="max-w-8xl w-3/4 md:flex md:flex-row">
                <div className="container mx-auto p-4">
                <h1 className={`text-5xl font-bold ${textColor} mb-8`}>Things I&apos;ve Done</h1>
                    <p className="mb-10 md:w-3/4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis nobis sapiente
                        tenetur? Ea
                        dolore ipsum minima illo? Commodi, eos minus repudiandae ad corporis praesentium ut nobis quae
                        maxime et.
                    </p>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                <CompanyCard companyName="Company 1"/>
                <CompanyCard companyName="Company 2"/>
                <CompanyCard companyName="Company 3"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                <CompanyCard companyName="Company 4"/>
                <CompanyCard companyName="Company 5"/>
                <CompanyCard companyName="Company 6"/>
            </div>
        </main>
    );
}
