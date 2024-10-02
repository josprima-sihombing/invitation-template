import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undangan Pernikahan",
  description: "Senin, 31 Februari 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/floral-3-preview",
    images:
      "https://www.kreasi-invitation.com/assets/previews/templates/floral-3-preview.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
