import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undangan Pernikahan",
  description: "Senin, 31 Februari 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/wedding-rose-photo",
    images:
      "https://www.kreasi-invitation.com/assets/previews/templates/wedding-rose-photo.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
