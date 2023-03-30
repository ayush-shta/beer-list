/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#2b65bd',
      'primary-light': '#eff6ff',
      secondary: '#fb923c',
      gray: '#8492a6',
      'gray-dark': '#273444',
      'gray-light': '#e5e7eb',
      error: '#ef4444'
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
};
