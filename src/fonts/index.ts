import localFont from "next/font/local";

export const jaguarFont = localFont({ src: "./Jaguar.woff" });
export const baileyFont = localFont({ src: "./Bailey.woff2" });
export const chalkboardFont = localFont({ src: "./Chalk Board.woff" });
export const prodasansFont = localFont({
	src: [
		{
			path: "./ProdaSans-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./ProdaSans-Italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./ProdaSans-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./ProdaSans-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
	],
});
