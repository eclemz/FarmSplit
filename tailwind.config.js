
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { width: '0px', height: '0px', opacity: 0.03},
          '100%': { width: '700px', height: '700px', opacity: 0 },
        },
      },
      animation: {
        ripple: 'ripple 1s linear infinite',
      },
      screens: {
        'lt': {'raw': '(min-width: 1024px and max-width: 1365px)'},
        'lg': {'raw': '(min-width: 1366px)'},
      },
    },
  },
  safelist: [
    {
      pattern: /left-\[.*\]/, // Allow dynamic `left-[x]` classes
    },
    {
      pattern: /right-\[.*\]/, // Allow dynamic `top-[y]` classes
    },
  ],
};

