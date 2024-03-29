/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AA4151",
        secondary: "#F9EBDE",
        tertiary: "#1A2F44"
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        vidaloka: ["Vidaloka", "sans-serif"]
      }
    }
  },
  plugins: []
};
