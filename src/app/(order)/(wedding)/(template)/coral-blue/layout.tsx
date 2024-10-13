import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Adi & Yuli",
  description: "Sabtu, 25 Desember 2025",
  openGraph: {
    url: "https://www.kreasi-invitation.com/coral-blue",
    images:
      "https://www.kreasi-invitation.com/assets/previews/templates/coral-blue.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#354279",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
