import css from "./section.module.css";

type SectionProps = {
	children: React.ReactNode;
	backgroundURL?: string;
};

export default function Section({ children, backgroundURL }: SectionProps) {
	return (
		<div className={css.section}>
			{backgroundURL && (
				<div className={css.background}>
					<img src={backgroundURL} alt="background" />
				</div>
			)}

			<div className={css.content}>{children}</div>
		</div>
	);
}
