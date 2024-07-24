"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { image, images } from "./assets";
import DATA from "./data";
import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";

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
		<Section>
			<div
				className={css.cover}
				style={{
					backgroundImage: `url(${image.bg})`,
				}}
			>
				<h1 className={hirarkiSignatureFont.className}>The Wedding</h1>

				<div className={css.name_container}>
					<div className={css.name}>
						<img src={image.a} alt="" />
						<span className={solenoidalFont.className}>&</span>
						<h1 className={hirarkiSignatureFont.className}>H</h1>
						<h2 className={hirarkiSignatureFont.className}>F</h2>
					</div>
				</div>

				<h2 className={solenoidalFont.className}>January 24th, 2024</h2>
				<button type="button" className={solenoidalFont.className}>
					Open Invitation
				</button>
			</div>
		</Section>
	);
}
