export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// TODO: add required font for this template
	return <main>{children}</main>;
}
