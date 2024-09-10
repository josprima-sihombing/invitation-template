const defaultTheme = require("tailwindcss/defaultTheme");
const textBorderPlugin = require("./src/utils/tw-plugins/text-border");

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
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [textBorderPlugin],
};
