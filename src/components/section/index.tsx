import css from "./section.module.css";

type SectionProps = {
	children: React.ReactNode;
	bgColor?: string;
	id?: string;
	fullHeight?: boolean;
};

export default function Section({
	children,
	bgColor = "#fff",
	id,
	fullHeight = true,
}: SectionProps) {
	return (
		<div
			className={css.section}
			style={{
				backgroundColor: bgColor,
				minHeight: fullHeight ? "100dvh" : "unset",
			}}
			id={id}
		>
			{children}
		</div>
	);
}
