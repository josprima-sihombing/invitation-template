import image1 from "./1.png";
import image2 from "./2.png";

import css from "./style.module.css";

export default function Floral2() {
	return (
		<div className={css.floral}>
			<img src={image1.src} className={css.floral_1} />
			<img src={image2.src} className={css.floral_2} />
		</div>
	);
}
