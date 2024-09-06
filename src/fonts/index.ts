import { Inter, Mitr, Amarante, Lemon } from "next/font/google";
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
export const hirarkiSignatureFont = localFont({
  src: "./Hirarki Signature.otf",
});
export const solenoidalFont = localFont({
  src: "./Solenoidal.otf",
});

export const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const mitr = Mitr({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const amarante = Amarante({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const lemon = Lemon({
  weight: "400",
  subsets: ["latin"],
});

export const supravitally = localFont({ src: "./Supravitally.otf" });
