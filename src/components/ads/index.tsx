import css from "./ads.module.css";

export default function Ads() {
  return (
    <div className={css.ads}>
      <span>Created by </span>
      <a
        href="https://www.kreasi-invitation.com"
        target="_blank"
        rel="noreferrer"
      >
        kreasi-invitation.com
      </a>
    </div>
  );
}
