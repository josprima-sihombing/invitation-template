"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import background from "./assets/background.jpg";
import preloadImage from "@/utils/preload-image";

import css from "./style.module.css";
import Section from "@/components/section";

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
		<div>
			<Section backgroundURL={background.src}>
				<h1>THE WEDDING</h1>
			</Section>
		</div>
	);
}
