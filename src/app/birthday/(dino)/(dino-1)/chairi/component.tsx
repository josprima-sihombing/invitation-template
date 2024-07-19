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

export default function Component() {
	const [loading, setLoading] = useState(true);
	const [play, setPlay] = useState(false);
	const containerRef = useRef(null);
	const coverRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const guestName = getName();

	const loadAssets = useCallback(async () => {
		await Promise.all(images.map((imageUrl) => preloadImage(imageUrl)));

		setLoading(false);
	}, []);

	const onSubmit = async (values: any) => {
		try {
			const response = await axios.post("/api/chairi", values);
		} catch (error) {
			// TODO: Display error message
			console.log("Error");
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
			{ scale: 1, opacity: 1, duration: 2, ease: "elastic" },
		);
	}, [loading]);

	if (loading) {
		return <FullScreenLoading />;
	}

	return (
		<div ref={containerRef}>
			<Music
				musicURL="/assets/musics/birthday-2.wav"
				play={play}
				setPlay={setPlay}
			/>

			<Section bgColor="#fff">
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
					<div ref={coverRef}>
						<h1 className={css.title}>Birthday Invitation</h1>

						<div className={css.image}>
							<img src={image.person} alt="" />
						</div>

						<h3 className={chalkboardFont.className}>{DATA.title}</h3>

						<h4>{formatDate(DATA.isoDate, "dddd, MMMM DD YYYY")}</h4>

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
			<Section id="section-2">
				<div className={css.box}>
					<div>
						<h1>{guestName ? `Dear ${guestName}` : "Hello"}</h1>
						<h2>Join us to celebrate</h2>
						<h3>Chairi 1st Birthday</h3>

						<Countdown date={DATA.isoDate} />
					</div>
				</div>
			</Section>

			<Section>
				<div className={css.box}>
					<div>
						<h1>Save the Date</h1>

						<div>
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
									<FaBuilding />
								</span>
								<span>{DATA.place}</span>
							</div>
						</div>

						<div>
							<button type="button">Detail Location</button>
						</div>

						<div>
							<h1>Dress Code</h1>
							<h2>Pastel Green</h2>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className={css.box}>
					<div>
						<h1>RSVP</h1>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label htmlFor="name">Your name:</label>
								<input id="name" type="text" {...register("name")} />
								<p>{errors.name?.message}</p>
							</div>
							<div>
								<label htmlFor="name">Your Phone Number</label>
								<input id="name" type="tel" {...register("phoneNumber")} />
							</div>

							<div>
								<input
									type="radio"
									id="attend1"
									value="true"
									{...register("attend")}
								/>
								<label htmlFor="attend1">Will Attend</label>
								<input
									type="radio"
									id="attend2"
									value="false"
									{...register("attend")}
								/>
								<label htmlFor="attend2">Will Not Attend</label>
								<p>{errors.attend?.message}</p>
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
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</Section>
			<Section>
				<div className={css.box}>
					<div>
						<h1>See you there</h1>
						<h2>Blessed parents</h2>
						<h3>Radhi & Afira</h3>
					</div>
				</div>
			</Section>
		</div>
	);
}
