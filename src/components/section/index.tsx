import css from "./section.module.css";

type SectionProps = {
	children: React.ReactNode;
	bgColor?: string;
	id?: string;
};

export default function Section({
	children,
	bgColor = "#fff",
	id,
}: SectionProps) {
	return (
		<div
			className={css.section}
			style={{
				backgroundColor: bgColor,
			}}
			id={id}
		>
			{children}
		</div>
	);
}
