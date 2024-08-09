/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["var(--primary-font)"],
				heading: ["var(--heading-font)"],
				decorative: ["var(--decorative-font)"],
				special: ["var(--special-font)"],
			},
		},
	},
	plugins: [],
};
