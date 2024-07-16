"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import background from "./assets/background.jpg";
import preloadImage from "@/utils/preload-image";

import css from "./style.module.css";
import Section from "@/components/section";
import DATA from "./data";
import Countdown from "react-countdown";

const images = [background.src];

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
				<h1>WEDDING INVITATION</h1>
				<h2>
					{DATA.firstPerson.name} & {DATA.secondPerson.name}
				</h2>
				<Countdown date={DATA.isoDate} />
			</div>
		</Section>
	);
}
