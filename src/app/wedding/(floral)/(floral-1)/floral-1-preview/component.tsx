"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { image, images } from "./assets";
import DATA from "./data";
import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";
import Countdown from "react-countdown";

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
		<>
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

			<Section>
				<div className={css.page1}>
					<img src={image.b} alt="" className={css.image1} />
					<img src={image.c} alt="" className={css.image2} />

					<h1 className={hirarkiSignatureFont.className}>
						Dear Yudi and Family, <br />
						You are invited to our wedding
					</h1>

					<div className={css.name}>
						<h2 className={solenoidalFont.className}>Hendra Kusuma</h2>
						<h3 className={solenoidalFont.className}>and</h3>
						<h2 className={solenoidalFont.className}>Fitri Aja</h2>
					</div>

					<Countdown
						date={DATA.isoDate}
						renderer={({ days, hours, minutes, seconds }) => (
							<div className={css.countdown}>
								<div>
									<span className={solenoidalFont.className}>{days}</span>
									<span className={solenoidalFont.className}>Days</span>
								</div>
								<div>
									<span className={solenoidalFont.className}>{hours}</span>
									<span className={solenoidalFont.className}>Hours</span>
								</div>
								<div>
									<span className={solenoidalFont.className}>{minutes}</span>
									<span className={solenoidalFont.className}>Minutes</span>
								</div>
								<div>
									<span className={solenoidalFont.className}>{seconds}</span>
									<span className={solenoidalFont.className}>Seconds</span>
								</div>
							</div>
						)}
					/>
				</div>
			</Section>
		</>
	);
}
