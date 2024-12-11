"use client";

import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import css from "./style.module.css";
import { FaPause, FaPlay } from "react-icons/fa6";
import Script from "next/script";

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
  return null;
  // const [player, setPlayer] = useState(null);

  // const playMusic = useCallback(() => {
  //   setPlay(true);
  // }, []);

  // const stopMusic = useCallback(() => {
  //   setPlay(false);
  // }, []);

  // useEffect(() => {
  //   if (!player) {
  //     return;
  //   }

  //   console.log(player);
  //   console.log(player.getVideoData());

  //   if (play) {
  //     player.playVideo();
  //   } else {
  //     player.pauseVideo();
  //   }
  // }, [play, player]);

  // const onPlayerReady = (event) => {
  //   setPlayer(event.target);
  // };

  // useEffect(() => {
  //   window.addEventListener("blur", stopMusic);
  //   window.addEventListener("focus", playMusic);

  //   window.onYouTubeIframeAPIReady = () => {
  //     new window.YT.Player("player", {
  //       height: "390",
  //       width: "640",
  //       videoId: "3G8CM-6BZC4",
  //       videoQuality: "small",
  //       playerVars: {
  //         playsinline: 1,
  //         controls: 0,
  //         loop: 1,
  //         rel: 0,
  //         autoplay: 0,
  //       },
  //       events: {
  //         onReady: onPlayerReady,
  //       },
  //     });
  //   };

  //   return () => {
  //     window.removeEventListener("blur", stopMusic);
  //     window.removeEventListener("focus", playMusic);
  //   };
  // }, []);

  // return (
  //   <>
  //     <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />

  //     {play ? (
  //       <button className={css.music} type="button" onClick={stopMusic}>
  //         <FaPause className={css.music_icon} />
  //       </button>
  //     ) : (
  //       <button className={css.music} type="button" onClick={playMusic}>
  //         <FaPlay className={css.music_icon} />
  //       </button>
  //     )}

  //     <div id="player" className="hidden"></div>
  //   </>
  // );
}
