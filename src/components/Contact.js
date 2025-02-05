import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-12">
      <div className="text-center">
        <p className={`text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          Contact Steve at +1 (201) 657-4580 to schedule a visit or begin a removal
        </p>
      </div>
    </section>
  );
};

export default Contact; 