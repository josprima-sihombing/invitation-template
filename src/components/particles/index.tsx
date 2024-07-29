import "@/libs/particles";
import { useEffect } from "react";
import config from "./config.json";

import css from "./particles.module.css";

declare global {
	interface Window {
		particlesJS: (id: string, config: any) => void;
	}
}

export default function Particles() {
	useEffect(() => {
		window.particlesJS("particles-js", config);
	}, []);

	return <div id="particles-js" className={css.particles}></div>;
}
