"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { image, images } from "./assets";

import formatDate from "@/utils/format-date";
import getName from "@/utils/get-name";
import { yupResolver } from "@hookform/resolvers/yup";
import Countdown from "react-countdown";
import { useForm } from "react-hook-form";
import { FaBuilding, FaCalendarDay, FaClock } from "react-icons/fa6";
import { DATA, drinks, foods } from "./data";
import { schema } from "./schema";
import css from "./style.module.css";
import axios from "axios";

export default function Component() {
	const [loading, setLoading] = useState(true);
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

	if (loading) {
		return <FullScreenLoading />;
	}

	return (
		<div>
			<Section>
				<div className={css.box}>
					<h1 className={css.title}>Birthday Invitation</h1>

					<img src={image.person} alt="" />
					<h3>{DATA.title}</h3>

					<div className={css.date}>
						<h2>{formatDate(DATA.isoDate, "dddd, MMMM DD YYYY")}</h2>
					</div>

					<button type="button">Open Invitation</button>
				</div>
			</Section>
			<Section>
				<div className={css.box}>
					<h1>{guestName ? `Dear ${guestName}` : "Hello"}</h1>
					<h2>Join us to celebrate</h2>
					<h3>Chairi 1st Birthday</h3>

					<Countdown date={DATA.isoDate} />
				</div>
			</Section>

			<Section>
				<div className={css.box}>
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
			</Section>

			<Section>
				<div className={css.box}>
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
									<label htmlFor="food">Please choose your desired food</label>
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
			</Section>
			<Section>
				<div className={css.box}>
					<h1>See you there</h1>
					<h2>Blessed parents</h2>
					<h3>Radhi & Afira</h3>
				</div>
			</Section>
		</div>
	);
}
