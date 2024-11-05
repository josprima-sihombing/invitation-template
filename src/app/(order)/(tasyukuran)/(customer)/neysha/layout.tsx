import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasyukuran Aqiqah Raneysha Safaluna Irfan",
  description: "Sabtu, 9 November 2024",
  openGraph: {
    url: "https://www.kreasi-invitation.com/neysha",
    images:
      "https://www.kreasi-invitation.com/assets/previews/customers/neysha.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
