import css from "./section.module.css";

type SectionProps = {
	children: React.ReactNode;
	bgColor?: string;
};

export default function Section({ children, bgColor = "#fff" }: SectionProps) {
	return (
		<div
			className={css.section}
			style={{
				backgroundColor: bgColor,
			}}
		>
			{children}
		</div>
	);
}
