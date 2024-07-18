import { primaryFont } from "@/fonts";

import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={primaryFont.className}>
			<body>{children}</body>
		</html>
	);
}
