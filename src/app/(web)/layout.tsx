import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undangan Digital Website | www.kreasi-invitation.com",
  description:
    "Jasa pembuatan undangan pernikahan, tasykuran aqiqah, birthday dan undangan digital lainnya",
  openGraph: {
    url: "https://www.kreasi-invitation.com",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--inter-var" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
