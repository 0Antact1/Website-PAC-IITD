/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      // added custom font here from index.html gAPI
      fontFamily: {
      chakrapech: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
