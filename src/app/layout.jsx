// "use client";

// import React, { useEffect } from 'react';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// import './globals.css';
// import { ThemeProvider, useTheme } from './components/themeContext';
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer";

// export default function RootLayout({ children }) {
//   return (
//     <ThemeProvider>
//       <html lang="en" className={inter.className}>
//         <body className="flex flex-col min-h-screen">
//           <Content>{children}</Content>
//         </body>
//       </html>
//     </ThemeProvider>
//   );
// }

// function Content({ children }) {
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     }
//   }, []);

//   return (
//     <div className={`${theme === 'light' ? 'bg-white text-zinc-600' : 'bg-zinc-800-90 text-zinc-400 '} flex flex-col flex-grow`}>
//       <header className={`${theme === 'light' ? 'bg-white shadow' : 'bg-zinc-800-90 shadow-lg'}`}>
//       <Navbar />
//       </header>
//       <main className="container mx-auto p-4 flex-grow">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// }
// "use client";

// import React from 'react';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// import './globals.css';
// import { ThemeProvider } from './components/themeContext';
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer";

// export default function RootLayout({ children }) {
//   return (
//     <ThemeProvider>
//       <html lang="en" className={inter.className}>
//         <body className="flex flex-col min-h-screen">
//           <Content>{children}</Content>
//         </body>
//       </html>
//     </ThemeProvider>
//   );
// }

// function Content({ children }) {
//   return (
//     <div className="flex flex-col flex-grow">
//       <header className="shadow-lg">
//         <Navbar />
//       </header>
//       <main className="container mx-auto p-4 flex-grow">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// }

"use client";

import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import './globals.css';
import { ThemeProvider, useTheme } from './components/themeContext';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className={inter.className}>
        <body className="flex flex-col min-h-screen">
          <Content>{children}</Content>
        </body>
      </html>
    </ThemeProvider>
  );
}

function Content({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-white text-zinc-600' : 'bg-zinc-800 text-zinc-400 '} flex flex-col flex-grow`}>
      <header className={`${theme === 'light' ? 'bg-white shadow' : 'bg-zinc-800 shadow-lg'}`}>
        <Navbar />
      </header>
      <main className="container mx-auto p-4 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

