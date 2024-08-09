import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const primaryFont = Poppins({
	display: "swap",
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--primary-font",
	subsets: ["latin"],
});

export const headingFont = localFont({
	display: "swap",
	src: "./Solenoidal.otf",
	variable: "--heading-font",
});

export const decorativeFont = localFont({
	display: "swap",
	src: "./Hummer-Miller.woff",
	variable: "--decorative-font",
});

export const specialFont = localFont({
	src: "./Ramadanish.woff",
	display: "swap",
	variable: "--special-font",
});

export const fontsVariable = [
	primaryFont.variable,
	headingFont.variable,
	decorativeFont.variable,
	specialFont.variable,
].join(" ");
