"use client";

// @ts-ignore
import CircleType from "circletype";
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
import { lemon } from "@/fonts";

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

  useEffect(() => {
    const circleType = new CircleType(document.getElementById("text"));

    circleType.dir(-1).radius(140);
  }, []);

  return (
    <div
      className={classNames(lemon.className, "h-full max-w-screen-md mx-auto")}
    >
      <div
        className={classNames("h-full relative z-50", css.cover, {
          "overflow-hidden": !isOpen,
        })}
      >
        <img
          src={images.image3}
          className="w-[80px] absolute right-[30px] bottom-[30px]"
        />
        <img
          src={images.image4}
          className="w-[110px] absolute left-[30px] bottom-[30px]"
        />

        <img
          src={images.image5}
          className="w-[250px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40px]"
        />

        <div className="absolute w-full top-1/2 -translate-y-1/2 text-center">
          <h1 className="text-center text-white text-lg mb-12">
            You are invited!
          </h1>

          <div className="mb-12 relative w-fit mx-auto">
            <div className="w-[260px] h-[290px] overflow-hidden rounded-[50%] mx-auto relative">
              <img
                src={images.image1}
                className="w-full h-full block object-cover"
              />
            </div>

            <img
              src={images.image2}
              className={classNames(css.center, "w-[320px] max-w-[unset]")}
            />

            <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2">
              <h1 className="whitespace-nowrap text-white text-lg" id="text">
                YANTO 1ST BIRTHDAY
              </h1>
            </div>

            <div className="absolute w-[100px] h-[380px] bg-[#FBDC77] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tr-[80px] -z-10" />
            <div className="absolute w-[100px] h-[380px] bg-[#E3CFF7] right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-bl-[80px] -z-10" />
          </div>

          <Button onClick={openInvitation}>OPEN INVITATION</Button>
        </div>
      </div>

      {isOpen && (
        <div ref={invitationContentRef}>
          <div
            className={classNames(css.page2, "relative pt-32 pb-48 px-8 z-40")}
          >
            <div className="relative z-10">
              <h1 className="text-white text-4xl mb-2">
                Hello{guestName ? ` ${guestName}` : ""}!
              </h1>
              <h2 className="text-white text-2xl mb-8">Join us to celebrate</h2>
              <h3
                className={classNames(
                  css.title,
                  "text-center text-5xl max-w-[220px]",
                )}
              >
                Yanto <br />
                1st <br />
                Birthday
              </h3>
            </div>

            <div className="h-[300px] w-[50px] bg-[#FBDC77] absolute right-0 top-0 translate-y-[200px] rounded-tr-[100px] rounded-bl-[100px]"></div>
            <img
              src={images.image6}
              className="w-[100px] absolute right-4 top-0 translate-y-[120px]"
            />
            <img
              src={images.image7}
              className="w-[160px] absolute bottom-[-100px] left-4"
            />
          </div>

          <div className="relative pt-32 pb-20 px-8 bg-[#FBDC77] z-30">
            <h1 className="mb-8 text-center text-white text-2xl text-border-[#BA9E42-3px]">
              Monday <br />
              March, 22nd 2024
            </h1>

            <Countdown3 date={dayjs().add(30, "day").toDate()} />

            <div className="mt-8 rounded-xl px-8 pt-8 pb-12 bg-[#76AC85]">
              <div className="text-white flex flex-col gap-6">
                <div className="flex gap-4">
                  <span className="text-[#FBDC77] mt-1 text-xl">
                    <FaCalendarDay />
                  </span>
                  <span>Monday, March, 22nd 2024</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#FBDC77] mt-1 text-xl">
                    <FaClock />
                  </span>
                  <span>Start at 7pm</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#FBDC77] mt-1 text-xl">
                    <PiShirtFoldedFill />
                  </span>
                  <span>
                    <div className="mb-1">Dress Code</div>
                    <div className="bg-white text-[#76AC85] px-2 rounded-md">
                      Pastel Green
                    </div>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#FBDC77] mt-1 text-xl">
                    <FaBuilding />
                  </span>
                  <span>
                    Hopa Place
                    <br />
                    Jl. Merdeka no 69
                  </span>
                </div>
              </div>
            </div>

            <img
              src={images.image8}
              className="w-[120px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[50px]"
            />
          </div>

          <div className="relative z-20 bg-[#76AC85] pt-16 pb-14 px-8">
            <div className="bg-white p-4 rounded-xl">
              <RsvpForm
                afterSubmit={() => {
                  document
                    .querySelector("#thankyou")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>

            <img
              src={images.image10}
              className="w-[120px] absolute left-[10px] bottom-0 translate-y-[30px]"
            />
            <img
              src={images.image9}
              className="w-[100px] absolute right-[10px] bottom-0 translate-y-[30px]"
            />
          </div>

          <div
            id="thankyou"
            className="relative z-10 bg-[#76AC85] pt-32 pb-[380px] px-8 overflow-hidden"
          >
            <div className="text-center">
              <h1 className="text-white text-3xl mb-14">See you there...</h1>
              <h2 className="text-white mb-2">Blessed parents</h2>
              <h3 className="text-[#FBDC77] text-2xl">Agung and Sri</h3>
            </div>

            <img
              src={images.image5}
              className="w-[280px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[-100px]"
            />

            <img
              src={images.image12}
              className="w-[100px] absolute left-0 bottom-[240px]"
            />
            <img
              src={images.image11}
              className="w-[100px] absolute right-0 bottom-[240px]"
            />

            <div className="bg-[#E3CFF7] absolute w-[480px] h-[220px] bottom-0 left-1/2 -translate-x-1/2 translate-y-[80px] rounded-[100%]">
              <img
                src={images.image13}
                className="w-[120px] absolute left-1/2 top-0 -translate-x-1/2 translate-y-[-40px]"
              />
              <img
                src={images.image4}
                className="w-[120px] absolute left-1/2 top-0 translate-x-[-150px]"
              />
              <img
                src={images.image14}
                className="w-[120px] absolute left-1/2 top-0 translate-x-[30px]"
              />
            </div>
          </div>
        </div>
      )}

      <Particles color="#FBDC77" opacity={0.8} />
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
