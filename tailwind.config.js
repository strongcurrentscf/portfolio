/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        "primary-light": "#ddcff8",
        "primary-dark": "#d3bfe6",
        "secondary-light": "#fbe2e3",
        "secondary-dark": "#678cdb",
        "tertiary-dark": "#d3a1a2",
      },
    },
  },
  plugins: [],
};
