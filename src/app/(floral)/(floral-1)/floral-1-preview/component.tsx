"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import background from "./assets/background.jpg";
import preloadImage from "@/utils/preload-image";

import css from "./style.module.css";
import Section from "@/components/section";
import DATA from "./data";
import Countdown from "react-countdown";
import Floral1 from "./assets/floral-1";
import Floral2 from "./assets/floral-2";
import { images } from "./assets";
import { secondaryFont } from "@/fonts";

export default function Component() {
	const [loading, setLoading] = useState(true);

	const loadAssets = useCallback(async () => {
		await Promise.all(images.map((imageUrl) => preloadImage(imageUrl)));

		setLoading(false);
	}, []);

	useEffect(() => {
		loadAssets();
	}, [loadAssets]);

	if (loading) {
		return <FullScreenLoading />;
	}

	return (
		<Section backgroundURL={background.src}>
			<div className={css.box}>
				<div className={css.floral_1}>
					<Floral1 />
				</div>
				<div className={css.floral_2}>
					<Floral2 />
				</div>

				<div className={css.content}>
					<h1 style={{ fontSize: "18px" }}>WEDDING INVITATION</h1>
					<h1
						className={secondaryFont.className}
						style={{
							fontSize: "68px",
							fontWeight: "normal",
							lineHeight: "52px",
						}}
					>
						{DATA.firstPerson.name}
						<br />
						&
						<br />
						{DATA.secondPerson.name}
					</h1>
					<Countdown date={DATA.isoDate} />
				</div>
			</div>
		</Section>
	);
}
