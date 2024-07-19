"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useRef, useState } from "react";

import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { image, images } from "./assets";

import formatDate from "@/utils/format-date";
import getName from "@/utils/get-name";
import { yupResolver } from "@hookform/resolvers/yup";
import Countdown from "react-countdown";
import { useForm } from "react-hook-form";
import {
	FaBuilding,
	FaCalendarDay,
	FaClock,
	FaEnvelope,
	FaMapLocation,
} from "react-icons/fa6";
import { DATA, drinks, foods } from "./data";
import { schema } from "./schema";
import css from "./style.module.css";
import axios from "axios";
import { chalkboardFont, prodasansFont } from "@/fonts";
import classNames from "classnames";
import Music from "@/components/music";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PiShirtFoldedFill } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";

export default function Component() {
	const [loading, setLoading] = useState(true);
	const [loadingForm, setLoadingForm] = useState(false);
	const [play, setPlay] = useState(false);
	const containerRef = useRef(null);
	const coverRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const guestName = getName();

	const loadAssets = useCallback(async () => {
		await Promise.all(images.map((imageUrl) => preloadImage(imageUrl)));

		setLoading(false);
	}, []);

	const onSubmit = async (values: any) => {
		setLoadingForm(true);

		try {
			await axios.post("/api/chairi", values);
			toast.success("RSVP form submitted successfully!", {
				position: "bottom-center",
			});
			reset();
		} catch (error) {
			toast.error("Opppsss, Error occured. Please try again", {
				position: "bottom-center",
			});
		} finally {
			setLoadingForm(false);
		}
	};

	// @ts-expect-error
	const isAttend = watch("attend") === "true";

	useEffect(() => {
		setValue("drink", "");
		setValue("food", "");
	}, [isAttend]);

	useEffect(() => {
		loadAssets();
	}, [loadAssets]);

	useGSAP(() => {
		if (loading) {
			return;
		}

		gsap.fromTo(
			coverRef.current,
			{ scale: 0.8, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 2, ease: "elastic", delay: 1 },
		);
	}, [loading]);

	if (loading) {
		return <FullScreenLoading />;
	}

	return (
		<div ref={containerRef} style={{ height: "100%" }}>
			<Music
				musicURL="/assets/musics/birthday-2.wav"
				play={play}
				setPlay={setPlay}
			/>

			<Section>
				<div
					className={css.box}
					style={{
						backgroundImage: `url(${image.a}), url(${image.b}), url(${image.c})`,
						backgroundRepeat: "no-repeat, no-repeat, no-repeat",
						backgroundPosition:
							"top left, bottom -8px left -10px, bottom -10px right -40px",
						backgroundSize: "150px, 200px, 160px",
					}}
				>
					<div ref={coverRef} className={css.cover}>
						<h1>Birthday Invitation</h1>

						<div style={{ margin: "auto" }}>
							<div className={css.image}>
								<img src={image.person} alt="" />
							</div>

							<div className={css.title}>
								<div className={css.content}>
									<h3 className={chalkboardFont.className}>{DATA.title}</h3>
									<img src={image.d} alt="" className={css.decoration} />
								</div>
							</div>

							<h4>{formatDate(DATA.isoDate, "dddd, MMMM DD YYYY")}</h4>
						</div>

						<button
							type="button"
							className={classNames(css.button, prodasansFont.className)}
							onClick={() => {
								document.getElementById("section-2")?.scrollIntoView({
									behavior: "smooth",
								});
								setPlay(true);
							}}
						>
							<FaEnvelope />
							<span>Open Invitation</span>
						</button>
					</div>
				</div>
			</Section>

			<Section id="section-2" bgColor="#9fb966" fullHeight={false}>
				<div className={css.box}>
					<div className={css.page1}>
						<h1>{guestName ? `Dear ${guestName}` : "Hello"},</h1>
						<h2>Join us to celebrate:</h2>

						<div className={css.title}>
							<div className={css.content}>
								<h3 className={chalkboardFont.className}>
									Chairi 1st Birthday
								</h3>

								<div className={css.decoration}>
									<img src={image.e} alt="" />
									<img src={image.f} alt="" />
								</div>
							</div>
						</div>

						<h4>Countdown:</h4>

						<Countdown
							date={DATA.isoDate}
							renderer={({ days, hours, minutes, seconds }) => (
								<div className={css.countdown}>
									<div>
										<span>{days}</span>
										<span>Days</span>
									</div>
									<div>
										<span>{hours}</span>
										<span>Hours</span>
									</div>
									<div>
										<span>{minutes}</span>
										<span>Minutes</span>
									</div>
									<div>
										<span>{seconds}</span>
										<span>Seconds</span>
									</div>
								</div>
							)}
						/>
					</div>
				</div>
			</Section>

			<Section fullHeight={false}>
				<div className={css.box}>
					<div className={css.page2}>
						<h1>Save the Date!</h1>

						<div className={css.detail}>
							<div>
								<span>
									<FaCalendarDay />
								</span>
								<span>{formatDate(DATA.isoDate, "dddd, MMMM DD YYYY")}</span>
							</div>
							<div>
								<span>
									<FaClock />
								</span>
								<span>{DATA.time}</span>
							</div>
							<div>
								<span>
									<PiShirtFoldedFill />
								</span>
								<span>
									<b>Dress Code</b>
									<br />
									Pastel Green
								</span>
							</div>
							<div>
								<span>
									<FaBuilding />
								</span>
								<span>
									{DATA.place}
									<br />
									{DATA.placeAddress}
								</span>
							</div>
						</div>

						<a
							className={css.location}
							href="https://maps.app.goo.gl/2Qv5dewnmHtRJJkB8"
							target="_blank"
							rel="noreferrer"
						>
							<FaMapLocation />

							<span>Detail Location</span>
						</a>
					</div>
				</div>
			</Section>

			<Section fullHeight={false} bgColor="#c3dc8e">
				<div className={css.box}>
					<div className={css.page3}>
						<h1>RSVP</h1>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label htmlFor="name">Your name:</label>
								<input
									id="name"
									type="text"
									placeholder="Name..."
									{...register("name")}
								/>
								<p className={css.input_error}>{errors.name?.message}</p>
							</div>
							<div>
								<label htmlFor="name">Your Phone Number</label>
								<input
									id="name"
									type="tel"
									placeholder="08xxx"
									{...register("phoneNumber")}
								/>
							</div>

							<div>
								<label
									className={classNames(
										css.radio_container,
										prodasansFont.className,
									)}
								>
									Will Attend
									<input
										type="radio"
										id="attend1"
										value="true"
										{...register("attend")}
									/>
									<span className={css.radio_checkmark}></span>
								</label>
								<label
									className={classNames(
										css.radio_container,
										prodasansFont.className,
									)}
								>
									Not Attend
									<input
										type="radio"
										id="attend2"
										value="false"
										{...register("attend")}
									/>
									<span className={css.radio_checkmark}></span>
								</label>
								<p className={css.input_error}>{errors.attend?.message}</p>
							</div>

							{isAttend && (
								<>
									<div>
										<label htmlFor="food">
											Please choose your desired food
										</label>
										<select id="food" {...register("food")} defaultValue="">
											<option value="" disabled>
												Choose one option
											</option>
											{foods.map((food) => (
												<option key={food} value={food}>
													{food}
												</option>
											))}
										</select>
									</div>

									<div>
										<label htmlFor="food">Please choose your drink</label>
										<select id="food" {...register("drink")} defaultValue="">
											<option value="" disabled>
												Choose one option
											</option>
											{drinks.map((food) => (
												<option key={food} value={food}>
													{food}
												</option>
											))}
										</select>
									</div>
								</>
							)}

							<div>
								<button type="submit" disabled={loadingForm}>
									{loadingForm ? "Loading..." : "Submit"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</Section>
			<Section fullHeight={false} bgColor="#647440">
				<div className={css.box}>
					<div className={css.page4}>
						<h1>See you there,</h1>
						<h2>Blessed parents</h2>
						<h3>Radhi & Afira</h3>
					</div>
				</div>
			</Section>

			<Toaster />
		</div>
	);
}
