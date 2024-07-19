"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import preloadImage from "@/utils/preload-image";
import background from "./assets/background.jpg";

import Section from "@/components/section";
import { baileyFont } from "@/fonts";
import formatDate from "@/utils/format-date";
import Countdown from "react-countdown";
import { images } from "./assets";
import Floral1 from "./assets/floral-1";
import Floral2 from "./assets/floral-2";
import DATA from "./data";
import css from "./style.module.css";

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
			<div className={css.box}>
				<div className={css.floral_1}>
					<Floral1 />
				</div>
				<div className={css.floral_2}>
					<Floral2 />
				</div>

				<div className={css.content}>
					<h1
						style={{
							fontSize: "16px",
							color: "#fff",
							letterSpacing: "4px",
							marginBottom: "12px",
						}}
					>
						WEDDING INVITATION
					</h1>
					<h1
						className={baileyFont.className}
						style={{
							fontSize: "120px",
							fontWeight: "normal",
							lineHeight: "60px",
							marginBottom: "12px",
							color: "#fff",
						}}
					>
						{DATA.firstPerson.name}
						<br />
						&
						<br />
						{DATA.secondPerson.name}
					</h1>
					<h1
						style={{
							fontSize: "16px",
							color: "#fff",
							marginBottom: "12px",
						}}
					>
						{formatDate(DATA.isoDate, "DD MMMM YYYY")}
					</h1>
					<Countdown date={DATA.isoDate} />

					<div>
						<h1>Kepada Yth. Bapak / Ibu / Saudara/i</h1>
						<h2>Tamu Undangan</h2>
						<button type="button">Buka Undangan</button>
					</div>
				</div>
			</div>
		</Section>
	);
}
