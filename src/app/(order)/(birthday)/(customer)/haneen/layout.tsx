import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulang Tahun Pertama & Tasyakuran Rumah Baru Haneen",
  description: "Sabtu, 4 Januari 2025",
  openGraph: {
    url: "https://www.kreasi-invitation.com/haneen",
    images:
      "https://www.kreasi-invitation.com/assets/previews/customers/haneen.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
