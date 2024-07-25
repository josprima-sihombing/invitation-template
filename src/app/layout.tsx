import { Suspense } from "react";
import "./globals.css";
import ClientSideScrollRestorer from "@/components/scroll-restorer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
			<Suspense>
				<ClientSideScrollRestorer />
			</Suspense>
		</html>
	);
}
