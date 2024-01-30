/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cst-orange': '#f85758',
        'cst-orange-light': '#f86068',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['"Open Sans"', 'sans-serif'],
        'bogaloo': ['Bogaloo', 'cursive'],
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk"],
  },
};
