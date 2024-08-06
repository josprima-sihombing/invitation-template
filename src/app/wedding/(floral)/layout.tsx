export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main
			style={{
				maxWidth: "768px",
				margin: "0 auto",
			}}
		>
			{children}
		</main>
	);
}
