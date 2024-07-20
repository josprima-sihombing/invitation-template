import css from "./ads.module.css";

export default function Ads() {
	return (
		<div className={css.ads}>
			<span>Copyright&copy;2024 </span>
			<a href="https://www.kreasikanvas.com" target="_blank" rel="noreferrer">
				kreasikanvas.com
			</a>
		</div>
	);
}
