const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--primary-font)"],
        heading: ["var(--heading-font)"],
        decorative: ["var(--decorative-font)"],
        special: ["var(--special-font)"],
        sans: ["var(--inter-var)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
