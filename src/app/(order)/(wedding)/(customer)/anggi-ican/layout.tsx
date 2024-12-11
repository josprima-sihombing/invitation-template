import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anggi & Ican",
  description: "Sabtu, 21 Desember 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/anggi-ican",
    images:
      "https://www.kreasi-invitation.com/assets/previews/customers/anggi-ican.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
