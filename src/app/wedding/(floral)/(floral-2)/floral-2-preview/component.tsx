"use client";

import Section from "@/components/section";
import { image, images } from "./assets";
import dynamic from "next/dynamic";

import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";
import { FaEnvelope } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import Music from "@/components/music";
import getName from "@/utils/get-name";
import FullScreenLoading from "@/components/fullscreen-loading";
import preloadImage from "@/utils/preload-image";

const Particles = dynamic(() => import("@/components/particles"), {
	ssr: false,
});

export default function Component() {
	const [loading, setLoading] = useState(true);
	const [play, setPlay] = useState(false);
	const [hideMusic, setHideMusic] = useState(true);
	const guestName = getName();

	const openInvitation = () => {
		document.body.style.overflow = "auto";
		setPlay(true);
		setHideMusic(false);

		document.getElementById("page1")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	const loadAssets = useCallback(async () => {
		await Promise.all(images.map((imageUrl) => preloadImage(imageUrl)));

		setLoading(false);
	}, []);

	useEffect(() => {
		document.body.style.overflow = "hidden";
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
					<div className={css.frame}>
						<div className={css.left} />
						<div className={css.right} />
						<div className={css.bottom} />
						<div className={css.top} />

						<div className={css.frame_name}>
							<img src={image.a} />
							<h1 className={solenoidalFont.className}>H&F</h1>
							<h2 className={solenoidalFont.className}>24.01.26</h2>
						</div>

						<div className={css.frame_floral}>
							<img src={image.b} />
							<img src={image.c} />
							<img src={image.c} />
						</div>
					</div>

					<div className={css.content}>
						<h1 className={solenoidalFont.className}>THE WEDDING OF</h1>
						<h2 className={hirarkiSignatureFont.className}>Hendra</h2>
						<h3 className={hirarkiSignatureFont.className}>and</h3>
						<h2 className={hirarkiSignatureFont.className}>Fitri</h2>
						<h4 className={solenoidalFont.className}>Kepada Yth.</h4>
						<h5 className={solenoidalFont.className}>
							{guestName ? guestName : "Tamu Undangan"}
						</h5>
						<button
							type="button"
							className={solenoidalFont.className}
							onClick={openInvitation}
						>
							<FaEnvelope />
							<span>Buka Undangan</span>
						</button>
					</div>
				</div>
			</Section>

			<Section id="page1">
				<h1>Page 1</h1>
			</Section>

			<Music
				musicURL="/assets/musics/birthday-2.wav"
				play={play}
				setPlay={setPlay}
				hide={hideMusic}
			/>

			<Particles />
		</>
	);
}
