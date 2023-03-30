/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#2b65bd',
      'primary-light': '#eff6ff',
      secondary: '#fb923c'
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
};
