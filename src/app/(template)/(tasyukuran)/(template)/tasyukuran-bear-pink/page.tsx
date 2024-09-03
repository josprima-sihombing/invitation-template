"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import Button from "@/components/button";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
import dayjs from "dayjs";
import RsvpForm from "@/components/rsvp-form";
import Countdown3 from "@/components/countdown/countdown-3";
import { FaBuilding, FaCalendarDay, FaClock } from "react-icons/fa6";
import { PiShirtFoldedFill } from "react-icons/pi";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { mitr, hirarkiSignatureFont, amarante } from "@/fonts";
import EnvelopeIcon from "@/components/icons/envelope";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

const Music = dynamic(() => import("@/components/music"), {
  ssr: false,
});

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);
  const invitationContentRef = useRef<HTMLDivElement>(null);
  const guestName = getName();

  const openInvitation = () => {
    setIsOpen(true);
    setPlay(true);
    setHideMusic(false);
  };

  useEffect(() => {
    if (isOpen) {
      invitationContentRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={classNames(mitr.className, "h-full max-w-screen-md mx-auto")}
    >
      <div
        className={classNames("h-full relative pt-28 overflow-hidden")}
        style={{
          backgroundImage: `url(${images.image5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-[220px] h-[240px] mx-auto mb-10">
          <img
            src={images.imagebaby}
            className="absolute max-w-[unset] w-full h-full object-cover"
          />
          <img
            src={images.image3}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[unset] w-[250px] h-[270px]"
          />
        </div>

        <img
          src={images.image2}
          className="w-[110px] absolute top-[10px] left-[10px]"
        />
        <img
          src={images.image12}
          className="w-[80px] absolute top-[30px] right-[10px] -rotate-12"
        />

        <h1
          className={classNames(
            hirarkiSignatureFont.className,
            "text-center text-2xl text-[#FF3888] mb-4",
          )}
        >
          Tasyukuran Aqiqah
        </h1>
        <h1
          className={classNames(
            amarante.className,
            css.name,
            "text-center text-white text-3xl bg-[#FF7AAF] w-fit mx-auto px-2 py-1 rounded-lg",
          )}
        >
          Sumiarti Katmijo
        </h1>

        <div className="absolute bottom-0 w-full h-[80px]">
          <div className="w-[140%] h-[220px] bg-[#8D8695] absolute left-1/2 -translate-x-1/2 translate-y-[-50px] rounded-[100%]"></div>
          <div className="w-[140%] h-[220px] bg-[#FF7AAF] absolute left-1/2 -translate-x-1/2 translate-y-[-30px] rounded-[100%]"></div>
          <img
            src={images.image4}
            className="w-[120px] absolute top-[-100px] left-1/2 -translate-x-1/2"
          />
          <button
            className={classNames(css.button, "relative")}
            onClick={openInvitation}
          >
            <span>
              <EnvelopeIcon size={24} color="#FF3888" />
            </span>
            <span className="text-[#FF3888]">BUKA UNDANGAN</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div ref={invitationContentRef}>
          <h1>Content</h1>
        </div>
      )}

      <Particles color="#FF7AAF" opacity={0.8} />
      <Toaster />
      <Music
        musicURL="/assets/musics/birthday-2.wav"
        play={play}
        setPlay={setPlay}
        hide={hideMusic}
      />
    </div>
  );
}
