import React from 'react';
import Carousel from './components/Carousel';
import Services from './components/Services';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import { useTheme } from './context/ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'} transition-colors duration-200`}>
      <header className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white shadow-lg`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-center tracking-wider">
            Bergen Utility Contracting
          </h1>
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full ${
              isDarkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-600 hover:bg-gray-700'
            } transition-colors duration-200`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>
      </header>
      
      <main>
        <Carousel />
        <div className="container mx-auto px-4 py-8">
          <Services />
          <TermsOfService />
          <Contact />
        </div>
      </main>

      <footer className={`${isDarkMode ? 'bg-secondary-dark' : 'bg-secondary-light'} text-white py-8 mt-8`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="font-semibold text-lg">Steve Roberts</p>
                <p className="hover:text-blue-300 transition-colors">
                  <a href="tel:12016574580">1 (201) 657-4580</a>
                </p>
                <p className="hover:text-blue-300 transition-colors">
                  <a href="mailto:BergenUtility@gmail.com">BergenUtility@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Logo Section */}
            <div className="text-center flex flex-col items-center justify-center">
              <div className={`w-32 h-32 ${
                isDarkMode 
                  ? 'bg-gray-800 border-2 border-white/20' 
                  : 'bg-white'
              } rounded-full flex items-center justify-center mb-4 transition-colors duration-200`}>
                <span className={`text-3xl font-bold ${
                  isDarkMode ? 'text-blue-400' : 'text-primary-light'
                }`}>
                  BUC
                </span>
              </div>
              <h2 className="text-xl font-bold">Bergen Utility</h2>
              <p className="text-sm">Contracting</p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <p>Monday - Sunday</p>
              <p>24/7 Emergency Service Available</p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Bergen Utility Contracting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 