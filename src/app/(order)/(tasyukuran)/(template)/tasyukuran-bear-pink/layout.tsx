import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undangan Tasyukuran",
  description: "Senin, 31 Februari 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/tasyukuran-bear-pink",
    images:
      "https://www.kreasi-invitation.com/assets/previews/templates/tasyukuran-bear-pink.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
