"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import background from "./assets/2.jpg";
import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { images } from "./assets";

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
			<h1>Birthday</h1>
		</Section>
	);
}
