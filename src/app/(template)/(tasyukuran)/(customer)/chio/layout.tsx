import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasyakuran Aqiqoh Baby Chio",
  description: "Kamis 19 September 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/chio",
    images:
      "https://www.kreasi-invitation.com/assets/previews/customers/chio.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
