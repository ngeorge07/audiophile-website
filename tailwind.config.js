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
      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      manrope: 'Manrope',
    },
    fontSize: {
      h1: [
        '56px',
        {
          letterSpacing: '2px',
          lineHeight: '58px',
        },
      ],

      h2: [
        '40px',
        {
          letterSpacing: '1.5px',
          lineHeight: '44px',
        },
      ],

      h3: [
        '32px',
        {
          letterSpacing: '1.15px',
          lineHeight: '36px',
        },
      ],

      h4: [
        '28px',
        {
          letterSpacing: '2px',
          lineHeight: '38px',
        },
      ],

      h5: [
        '24px',
        {
          letterSpacing: '1.7px',
          lineHeight: '33px',
        },
      ],

      h6: [
        '18px',
        {
          letterSpacing: '1.3px',
          lineHeight: '25px',
        },
      ],

      p: ['15px', '25px'],

      overline: [
        '14px',
        {
          letterSpacing: '10px',
          lineHeight: '19px',
        },
      ],

      subtitle: [
        '13px',
        {
          letterSpacing: '1px',
          lineHeight: '25px',
        },
      ],
    },
  },
  plugins: [],
};
