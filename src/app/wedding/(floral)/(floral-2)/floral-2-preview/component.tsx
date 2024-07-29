"use client";

import Section from "@/components/section";
import { image, images } from "./assets";
import dynamic from "next/dynamic";

import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";
import {
	FaArrowUpRightFromSquare,
	FaBuilding,
	FaCalendarDay,
	FaClock,
	FaEnvelope,
} from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import Music from "@/components/music";
import getName from "@/utils/get-name";
import FullScreenLoading from "@/components/fullscreen-loading";
import preloadImage from "@/utils/preload-image";
import classNames from "classnames";
import DATA from "./data";
import Countdown2 from "@/components/countdown/countdown-2";
import formatDate from "@/utils/format-date";
import RsvpForm from "@/components/rsvp-form";
import Ads from "@/components/ads";

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
						<h3 className={hirarkiSignatureFont.className}>dan</h3>
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
				<div
					className={classNames(css.page, css.page1)}
					style={{
						backgroundImage: `url(${image.d})`,
					}}
				>
					<div className={css.page_border} />
					<div className={css.page_flower_left}>
						<img src={image.e} />
					</div>
					<div className={css.content}>
						<p className={solenoidalFont.className}>
							Tanpa mengurangi rasa hormat, kami bermaksud mengundang
							bapak/ibu/saudara/i untuk hadir pada acara pernikahan kami
						</p>
					</div>
				</div>
			</Section>

			<Section>
				<div
					className={classNames(css.page, css.page2)}
					style={{
						backgroundImage: `url(${image.d})`,
					}}
				>
					<div className={css.page_border} />
					<div className={css.content}>
						<p className={solenoidalFont.className}>Kami yang berbahagia:</p>

						<div className={css.person_left}>
							<div className={css.person_img}>
								<div className={css.person_frame_left}>
									<img src={image.g} />
								</div>
								<div className={css.person_frame_right}>
									<img src={image.g} />
								</div>

								<img src={image.personA} />
							</div>

							<div className={css.person_data}>
								<h1 className={hirarkiSignatureFont.className}>Hendra</h1>
							</div>
						</div>

						<h2 className={hirarkiSignatureFont.className}>dan</h2>

						<div className={css.person_right}>
							<div className={css.person_img}>
								<div className={css.person_frame_left}>
									<img src={image.g} />
								</div>
								<div className={css.person_frame_right}>
									<img src={image.g} />
								</div>

								<img src={image.personB} />
							</div>

							<div className={css.person_data}>
								<h1 className={hirarkiSignatureFont.className}>Fitri</h1>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div
					className={classNames(css.page, css.page3)}
					style={{
						backgroundImage: `url(${image.d})`,
					}}
				>
					<div className={css.page_border} />
					<div className={css.page_flower_right}>
						<img src={image.f} />
					</div>

					<div className={css.content}>
						<h1 className={hirarkiSignatureFont.className}>Wedding Day</h1>

						<Countdown2 date={DATA.isoDate} />

						<div className={css.events}>
							{DATA.events.map((event) => (
								<div key={event.name} className={css.event}>
									<h1 className={hirarkiSignatureFont.className}>
										{event.name}
									</h1>

									<div className={css.event_detail}>
										<div>
											<FaCalendarDay />
											<span className={solenoidalFont.className}>
												{formatDate(event.date, "D MMMM YYYY", "id")}
											</span>
										</div>

										<div>
											<FaClock />

											<span className={solenoidalFont.className}>
												{event.time}
											</span>
										</div>

										<div>
											<FaBuilding />

											<span className={solenoidalFont.className}>
												{event.place}
											</span>
										</div>
									</div>

									<div className={css.action}>
										<a href="#" className={solenoidalFont.className}>
											Detail Lokasi Map
											<FaArrowUpRightFromSquare />
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div
					className={classNames(css.page)}
					style={{
						backgroundImage: `url(${image.d})`,
					}}
				>
					<div className={css.content}>
						<RsvpForm />
					</div>
				</div>
			</Section>

			<Section>
				<div
					className={classNames(css.page, css.page4)}
					style={{
						backgroundImage: `url(${image.d})`,
					}}
				>
					<div className={css.page_border} />
					<div className={css.page_flower_bottom}>
						<img src={image.b} />
					</div>

					<div className={css.content}>
						<h1 className={solenoidalFont.className}>
							Atas kehadiran dan Doa Restunya kami ucapkan terimakasih.
						</h1>
						<h2 className={hirarkiSignatureFont.className}>Hendra dan Fitri</h2>
					</div>
				</div>
			</Section>

			<Ads />

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
