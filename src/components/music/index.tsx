"use client";

import {
	type Dispatch,
	type SetStateAction,
	useCallback,
	useEffect,
	useMemo,
} from "react";

import css from "./style.module.css";
import { FaPause, FaPlay } from "react-icons/fa6";

type MusicProps = {
	play: boolean;
	setPlay: Dispatch<SetStateAction<boolean>>;
	musicURL: string;
};

export default function Music({ musicURL, play, setPlay }: MusicProps) {
	const audio = useMemo(() => {
		const music = new Audio(musicURL);

		music.volume = 0.3;
		music.loop = true;
		return music;
	}, []);

	const playMusic = useCallback(() => {
		setPlay(true);
	}, []);

	const stopMusic = useCallback(() => {
		setPlay(false);
	}, []);

	useEffect(() => {
		if (play) {
			audio.play();
		} else {
			audio.pause();
		}
	}, [play]);

	useEffect(() => {
		window.addEventListener("blur", stopMusic);

		return () => {
			window.removeEventListener("blur", stopMusic);
		};
	}, []);

	if (play) {
		return (
			<button className={css.music} type="button" onClick={stopMusic}>
				<FaPause className={css.music_icon} />
			</button>
		);
	}

	return (
		<button className={css.music} type="button" onClick={playMusic}>
			<FaPlay className={css.music_icon} />
		</button>
	);
}
