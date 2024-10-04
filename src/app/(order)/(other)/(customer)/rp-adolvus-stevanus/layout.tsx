import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RP. ADOLVUS STEVANUS, SVD",
  description: "Tahbisan Imamat, Misa Perdana dan Misa Syukur",
  openGraph: {
    url: "https://www.kreasi-invitation.com/rp-adolvus-stevanus",
    images:
      "https://www.kreasi-invitation.com/assets/previews/customers/rp-adolvus-stevanus.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
