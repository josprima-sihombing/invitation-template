import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasyukuran Aqiqah Mikhayla",
  description: "Ahad, 15 September 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/mikhayla",
    images: "https://www.kreasi-invitation.com/assets/previews/mikhayla.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
