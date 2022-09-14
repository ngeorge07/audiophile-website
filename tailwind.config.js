/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      primary: '#F1F1F1',
      secondary: '#101010',
      accent1: '#D87D4A',
      accent2: '#fbaf85',

      background: '#FAFAFA',
    },
  },
  plugins: [],
};
