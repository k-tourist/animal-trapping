/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1a365d',
          dark: '#60a5fa',
        },
        secondary: {
          light: '#2d3748',
          dark: '#1f2937',
        },
        background: {
          light: '#f9fafb',
          dark: '#111827',
        },
        card: {
          light: '#ffffff',
          dark: '#1f2937',
        },
      },
    },
  },
  plugins: [],
} 