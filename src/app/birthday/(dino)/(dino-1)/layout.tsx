import { prodasansFont } from "@/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <main className={prodasansFont.className}>{children}</main>;
}
