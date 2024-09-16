"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
import dayjs from "dayjs";
import RsvpForm from "@/components/rsvp-form";
import Countdown3 from "@/components/countdown/countdown-3";
import { FaBuilding, FaCalendarDay, FaClock } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import {
  mitr,
  hirarkiSignatureFont,
  amarante,
  sofiaSans,
  ramadhanish,
  baloo,
} from "@/fonts";
import EnvelopeIcon from "@/components/icons/envelope";
import BankCard from "@/components/bank-card";
import AssetsLoader from "@/components/assets-loader";
import Ads from "@/components/ads";

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

    if (invitationContentRef.current) {
      invitationContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
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
        className={classNames(
          sofiaSans.className,
          "h-full max-w-screen-sm mx-auto text-[#4C789A]",
        )}
      >
        <div
          className={classNames(
            css.cover,
            "h-full relative pt-[80px] px-8 overflow-hidden",
          )}
          style={{
            backgroundImage: `url(${images.imagebg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        >
          <div
            className={classNames(
              css.blueGradient,
              "h-full rounded-t-[140px] p-[20px]",
            )}
          >
            <div
              className={classNames(
                css.coverGradient,
                "h-full rounded-t-[120px] border-solid border-[#7EC1F5] border-[5px] flex items-center pb-[100px]",
              )}
            >
              <div className="text-center w-full">
                <h1 className="tracking-[6px]">UNDANGAN</h1>
                <h1
                  className={classNames(
                    ramadhanish.className,
                    "text-2xl mb-[10px]",
                  )}
                >
                  Tasyakuran Aqiqoh
                </h1>

                <div>
                  <img
                    src={images.imagebaby}
                    className="w-[205px] h-[205px] object-cover rounded-[50%] border-[5px] border-solid border-[#D3A043] shadow-lg mx-auto"
                  />

                  <h1
                    className={classNames(
                      baloo.className,
                      css.name,
                      "text-[#fff] text-3xl relative top-[-20px]",
                    )}
                  >
                    Baby Chio
                  </h1>
                </div>

                <div className="mb-[10px]">
                  <h1>Kepada:</h1>
                  <h1 className="font-bold">
                    {guestName ? guestName : "Bapak/Ibu/Saudara/i"}
                  </h1>
                </div>

                <button
                  onClick={openInvitation}
                  className={classNames(css.button)}
                >
                  <span className="mb-[4px]">
                    <EnvelopeIcon size={20} />
                  </span>
                  <span className="whitespace-nowrap">Buka Undangan</span>
                </button>
              </div>
            </div>
          </div>

          <img src={images.image6} className="absolute top-0 left-0 w-full" />

          <div className="absolute left-[10px] top-0">
            <img src={images.image4} className="w-[30px]" />
            <img
              src={images.image4}
              className="w-[20px] absolute left-[30px] top-0"
            />
          </div>

          <div className="absolute right-[10px] top-0">
            <img src={images.image4} className="w-[25px]" />
            <img
              src={images.image4}
              className="w-[40px] max-w-[unset] absolute right-[25px] top-0"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full pointer-events-none">
            <img
              src={images.image1}
              className="w-[100px] absolute right-0 bottom-[30px]"
            />
            <img
              src={images.image2}
              className="w-[200px] absolute left-[-40px] bottom-[30px]"
            />

            <div className="w-full overflow-hidden">
              <img
                src={images.image3}
                className="h-[100px] max-w-[unset] relative left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="h-[30px] w-full left-0 bottom-0 bg-[#7EC1F5] absolute"></div>
          </div>

          <div
            className={classNames(
              css.coverLeft,
              "absolute left-0 top-0 h-full w-[50%]",
            )}
            style={{
              backgroundImage: `url(${images.imagecoverleft})`,
              backgroundSize: "cover",
              backgroundPosition: "top right",
            }}
          />

          <div
            className={classNames(
              css.coverRight,
              "absolute right-0 top-0 h-full w-[50%]",
            )}
            style={{
              backgroundImage: `url(${images.imagecoverright})`,
              backgroundSize: "cover",
              backgroundPosition: "top left",
            }}
          />
        </div>

        {isOpen && (
          <div ref={invitationContentRef}>
            <Ads />
          </div>
        )}

        <Particles color="#71C3F3" opacity={0.8} />
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
