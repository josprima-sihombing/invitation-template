import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasyakuran Aqiqah Ashraf Bilfaqih Putra",
  description: "Sabtu, 18 Januari 2025",
  openGraph: {
    url: "https://www.kreasi-invitation.com/ashraf",
    images:
      "https://www.kreasi-invitation.com/assets/previews/customers/ashraf.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
