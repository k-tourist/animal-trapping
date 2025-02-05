import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { isDarkMode } = useTheme();
  const services = [
    {
      title: 'Animal Service',
      price: '$190',
      features: [
        'Single Trap',
        'Duration: Until Target Animal is Relocated'
      ]
    },
    {
      title: 'Animal Service (5-day)',
      price: '$390',
      features: [
        'Multiple Traps',
        'No limit',
        'Duration: 5 Day\'s of Trapping'
      ]
    },
    {
      title: 'Animal Service (10-day)',
      price: '$699',
      features: [
        'Multiple Traps',
        'No limit',
        'Duration: 10 Day\'s of Trapping'
      ]
    },
    {
      title: 'Pigeon Service (10-day)',
      price: '$75',
      features: [
        'Multiple Pigeon Traps',
        'No limit, Checked and Baited Daily',
        'Duration: 10 days'
      ]
    },
    {
      title: 'Pigeon Service (30-day)',
      price: '$975',
      features: [
        'Multiple Pigeon Traps',
        'No limit, Checked and Baited Daily',
        'Duration: 30 days'
      ]
    },
    {
      title: 'Pigeon Service (60-day)',
      price: '$1999',
      features: [
        'Multiple Pigeon Traps',
        'No limit, Checked and Baited Daily',
        'Duration: 60 days'
      ]
    }
  ];

  return (
    <section className="py-12">
      <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`${
              isDarkMode ? 'bg-card-dark text-gray-200' : 'bg-card-light text-gray-800'
            } p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {service.price}
              </p>
            </div>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 