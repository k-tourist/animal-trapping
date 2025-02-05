import React from 'react';
import Carousel from './components/Carousel';
import Services from './components/Services';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="absolute top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center tracking-wider text-slate-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.6)]">
            Bergen Utility Contracting
          </h1>
        </div>
      </header>
      
      <main className="relative">
        <Carousel />
        <div className="container mx-auto px-4 py-8">
          <Services />
          <TermsOfService />
          <Contact />
        </div>
      </main>

      <footer className="bg-secondary text-white py-8 mt-8">
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
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-3xl font-bold">BUC</span>
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