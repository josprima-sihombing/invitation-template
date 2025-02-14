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
  hide?: boolean;
};

export default function Music({
  musicURL,
  play,
  setPlay,
  hide = true,
}: MusicProps) {
  const audio = useMemo(() => {
    const music = new Audio(musicURL);

    music.volume = 0.5;
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
    window.addEventListener("focusin", playMusic);

    return () => {
      window.removeEventListener("blur", stopMusic);
      window.removeEventListener("focusin", playMusic);
    };
  }, []);

  if (hide) {
    return null;
  }

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
