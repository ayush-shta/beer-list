/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        dark: '#225097',
        DEFAULT: '#2b65bd',
        light: '#6a93d0',
        'extra-light': '#eff6ff'
      },
      secondary: {
        DEFAULT: '#fb923c',
        light: '#fed7aa'
      },
      gray: {
        DEFAULT: '#8492a6',
        dark: '#273444',
        light: '#e5e7eb'
      },
      // primary: '#2b65bd',
      // 'primary-light': '#eff6ff',
      // secondary: '#fb923c',
      // gray: '#8492a6',
      // 'gray-dark': '#273444',
      // 'gray-light': '#e5e7eb',
      error: '#ef4444',
      white: '#ffffff'
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
};
