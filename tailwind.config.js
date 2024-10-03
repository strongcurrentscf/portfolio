/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        // Pastel colors for light mode
        "pastel-pink": "#FFD1DC", // Light Pink (Original)
        "pastel-blue": "#AEC6CF", // Light Blue (Original)
        "pastel-mint": "#B2F2BB", // Light Mint (Original)

        // Darker colors for dark mode
        "dark-pink": "#8B5E6B", // Darker Pink
        "dark-blue": "#5A7684", // Darker Blue
        "dark-mint": "#558F60", // Darker Mint
      },
    },
  },
  plugins: [],
};
