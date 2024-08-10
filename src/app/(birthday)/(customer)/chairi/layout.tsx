import { prodasansFont } from "@/fonts";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#9fb966",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={prodasansFont.className}>{children}</main>;
}
