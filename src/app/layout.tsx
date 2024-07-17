import { primaryFont } from "@/fonts";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id" className={primaryFont.className}>
			<body>{children}</body>
		</html>
	);
}
