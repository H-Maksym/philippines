/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss,css}'],
  theme: {
    screens: {
      sm: { max: '767px' },
      md: ' 768px',
      // => @media (min-width: 768px) { ... }
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1439px' },
        // => @media (min-width: 768px) { ... }
        lg: { min: '1440px' },
        // => @media (min-width: 1440px) { ... }
      },
      padding: {
        DEFAULT: '20px',
        md: '32px',
        lg: '112px',
      },
      center: true,
    },
    fontSize: {
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': ' 20px',
      '3xl': ' 24px',
      '4xl': '32px',
      '5xl': '48px',
      '6xl': '56px',
    },
  },

  extend: {},
  plugins: [],
};
