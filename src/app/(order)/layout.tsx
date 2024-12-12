import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter-var" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} translate="no">
      <meta name="google" content="notranslate" />
      <body>{children}</body>
    </html>
  );
}
