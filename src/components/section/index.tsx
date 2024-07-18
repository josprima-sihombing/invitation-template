import css from "./section.module.css";

type SectionProps = {
	children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
	return <div className={css.section}>{children}</div>;
}
