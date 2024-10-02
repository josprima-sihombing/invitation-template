import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasyakuran Islamic Blue",
  description: "Kamis, 31 Februari 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/tasyukuran-islamic-blue",
    images:
      "https://www.kreasi-invitation.com/assets/previews/templates/tasyukuran-islamic-blue.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
