"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
import dayjs from "dayjs";
import RsvpForm from "@/components/rsvp-form";
import Countdown3 from "@/components/countdown/countdown-3";
import { FaBuilding, FaCalendarDay, FaClock } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { mitr, hirarkiSignatureFont, amarante, supravitally } from "@/fonts";
import EnvelopeIcon from "@/components/icons/envelope";
import BankCard from "@/components/bank-card";
import AssetsLoader from "@/components/assets-loader";
import Ads from "@/components/ads";
import { images } from "./assets";

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
    <AssetsLoader assets={images}>
      <div
        className={classNames(mitr.className, "h-full max-w-screen-md mx-auto")}
      >
        <div
          className="h-full relative overflow-hidden"
          style={{
            backgroundImage: `url(${images.imagebgRed})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={classNames(css.leftPole)}>
            <img
              src={images.image3}
              className="max-w-[unset] w-[160px] absolute left-[-40px] top-0 translate-y-[-60px] rotate-[60deg]"
            />
          </div>

          <div className={classNames(css.rightPole)}>
            <img
              src={images.image4}
              className="max-w-[unset] w-[130px] absolute right-[-40px] top-[-20px]"
            />
          </div>

          <div className="relative px-16 pt-[100px] pb-[100px] h-full text-center flex flex-col">
            <h1
              className={classNames(
                hirarkiSignatureFont.className,
                css.textShadow,
                "text-[#EBC772] text-2xl",
              )}
            >
              The Wedding of
            </h1>

            <div
              className={classNames(css.coverTextBg, "flex-grow flex flex-col")}
            >
              <div
                className={classNames(
                  supravitally.className,
                  "flex-grow flex flex-col justify-center gap-2 text-[#EBC772]",
                )}
              >
                <h1 className="text-5xl">Asep</h1>
                <h2 className="text-4xl">&</h2>
                <h1 className="text-5xl">Suharmi</h1>
              </div>
              <div>
                <h1
                  className={classNames(
                    supravitally.className,
                    "text-[#3E1E1E] text-lg",
                  )}
                >
                  Kepada:
                </h1>
                <h1 className="font-medium text-xl text-[#3E1E1E] mb-6">
                  {guestName || "Bapak/Ibu/Saudara/i"}
                </h1>
                <button
                  className={classNames(css.button)}
                  onClick={openInvitation}
                >
                  <span>
                    <EnvelopeIcon size={16} color="#EBC772" />
                  </span>
                  <span className="text-[#EBC772] text-sm font-medium">
                    Buka Undangan
                  </span>
                </button>
              </div>
            </div>
          </div>

          <img
            src={images.image5}
            className="max-w-[unset] absolute w-[calc(100%+200px)] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />

          <img
            src={images.image5}
            className="max-w-[unset] absolute w-[calc(100%+200px)] bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"
          />

          <img
            src={images.image2}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[40px] w-[240px]"
          />

          <img
            src={images.image9}
            className={classNames(
              css.left,
              "absolute top-1/2 right-full -translate-y-1/2 translate-x-1/2 max-w-[unset] h-[calc(100%+250px)]",
            )}
          />

          <img
            src={images.image9}
            className={classNames(
              css.right,
              "absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 max-w-[unset] h-[calc(100%+250px)]",
            )}
          />

          <div
            className={classNames(
              css.top,
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            )}
          >
            <div
              className={classNames(
                supravitally.className,
                "bg-[#EBC772] text-[#7F0826] pt-[10px] px-[35px] pb-[40px] relative top-[-10px]",
              )}
            >
              <div className="flex justify-center items-center gap-1 mb-[-10px]">
                <h1 className="text-6xl">A</h1>
                <h2 className="text-3xl">&</h2>
                <h1 className="text-6xl">S</h1>
              </div>
              <h1 className="text-lg">24 Maret 2024</h1>
            </div>

            <img
              src={images.image10}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[unset]"
            />
          </div>
        </div>

        {isOpen && (
          <div ref={invitationContentRef}>
            <Ads />
          </div>
        )}

        <Particles color="#EBC772" opacity={0.8} />
        <Toaster />
        <Music
          musicURL="/assets/musics/birthday-2.wav"
          play={play}
          setPlay={setPlay}
          hide={hideMusic}
        />
      </div>
    </AssetsLoader>
  );
}
