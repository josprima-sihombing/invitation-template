import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import image1 from "./1.png";
import image2 from "./2.png";

import css from "./style.module.css";

export default function Floral2() {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.fromTo(
				`.${css.floral_1}`,
				{ rotation: -4 },
				{ rotation: 4, duration: 5, repeat: -1, ease: "none", yoyo: true },
				0,
			);

			tl.fromTo(
				`.${css.floral_2}`,
				{ rotation: -4 },
				{ rotation: 4, duration: 4, repeat: -1, ease: "sine", yoyo: true },
				0,
			);
		},
		{
			scope: containerRef,
		},
	);

	return (
		<div className={css.floral} ref={containerRef}>
			<img src={image1.src} className={css.floral_1} />
			<img src={image2.src} className={css.floral_2} />
		</div>
	);
}
