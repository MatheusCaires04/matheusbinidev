/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        concert: ["Concert One", "sans-serif"],
      },
      colors: {
        "blue-dark": "#082032",
        orange: "#dd6b4b",
        blue: "#1c4b82",
      },
    },
  },
  plugins: [],
};
