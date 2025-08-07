/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via a 'dark' class on <html>
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#dc2626', // Tailwind default red-600
          700: '#b91c1c', // Tailwind default red-700
          800: '#991b1b', // Tailwind default red-800
          // You can add custom reds here if you want, e.g.:
          // 500: '#ef4444',
          // 900: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
};
