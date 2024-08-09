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
        height: fullHeight ? "100%" : "unset",
      }}
      id={id}
    >
      {children}
    </div>
  );
}
