"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { images, image } from "./assets";

import css from "./style.module.css";
import Countdown from "react-countdown";
import DATA from "./data";
import formatDate from "@/utils/format-date";
import { FaBuilding, FaCalendarDay, FaClock } from "react-icons/fa6";
import getName from "@/utils/get-name";

export default function Component() {
	const [loading, setLoading] = useState(true);
	const guestName = getName();

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

					<form>
						<div>
							<label htmlFor="name">Your name:</label>
							<input id="name" type="text" />
						</div>
						<div>
							<label htmlFor="name">Your Phone Number</label>
							<input id="name" type="tel" />
						</div>

						<div>
							<input type="radio" id="attend1" name="attend" value="true" />
							<label htmlFor="attend1">Will Attend</label>
							<input type="radio" id="attend1" name="attend" value="true" />
							<label htmlFor="attend1">Will Not Attend</label>
						</div>

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
