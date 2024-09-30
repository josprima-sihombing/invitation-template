"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
import dayjs from "dayjs";
import RsvpForm from "@/components/rsvp-form";
import Countdown3 from "@/components/countdown/countdown-3";
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaCalendarDay,
  FaChurch,
  FaClock,
} from "react-icons/fa6";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { hirarkiSignatureFont, sofiaSans, solenoidalFont } from "@/fonts";
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
          "h-full max-w-screen-md mx-auto",
        )}
      >
        <div
          className={classNames(
            {
              "pointer-events-none": isOpen,
            },
            "fixed w-full h-full overflow-hidden bg-transparent z-30",
          )}
        >
          <div
            className={classNames(
              css.cover_left,
              {
                [css["cover_left--open"]]: isOpen,
              },
              "w-1/2 h-full absolute left-0 z-20",
            )}
            style={{
              backgroundImage: `url(${images.imageCoverLeft})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
            }}
          />

          <div
            className={classNames(
              css.cover_right,
              {
                [css["cover_right--open"]]: isOpen,
              },
              "w-1/2 h-full absolute right-0 z-20",
            )}
            style={{
              backgroundImage: `url(${images.imageCoverRight})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
            }}
          />

          <div
            className={classNames(
              {
                "pointer-events-none": isOpen,
              },
              "absolute w-full h-full flex flex-col items-center justify-center mt-[40px] z-20",
            )}
          >
            <img
              src={images.imageLogo}
              className={classNames(
                css.cover_logo,
                {
                  [css["cover_logo--open"]]: isOpen,
                },
                "w-[180px] mx-auto mb-[40px]",
              )}
            />

            <div
              className={classNames(
                css.cover_name,
                {
                  [css["cover_name--open"]]: isOpen,
                },
                "text-center",
              )}
            >
              <h1 className="text-[#DAB96B]">Kepada Yth:</h1>
              <h1 className="text-[#DAB96B] mb-8">{guestName}</h1>
              <button onClick={openInvitation} className={css.button}>
                Buka Undangan
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="h-full">
            <div
              className={classNames(
                css.content,
                "relative pb-4 pt-28 px-4 h-full z-10 overflow-hidden",
              )}
              style={{
                backgroundImage: `url(${images.imageBg})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            >
              <p className="text-center px-10 leading-relaxed text-[#662B32]">
                Dengan ungkapan puji syukur atas anugerah dan cinta kasih Allah
                yang Maha Kuasa, mengundang Bapak/Ibu/Saudara/i dalam acara
                Resepsi Pernikahan putra putri kami tercinta
              </p>

              <div className={css.ornament}>
                <img
                  src={images.imageOrnament2}
                  className="absolute bottom-0 left-0 w-full"
                />
                <img
                  src={images.imageOrnament3}
                  className="absolute bottom-0 left-0 w-full"
                />

                <img
                  src={images.imageOrnament4}
                  className="absolute left-0 bottom-0 w-[160px]"
                />
                <img
                  src={images.imageOrnament5}
                  className="absolute right-0 bottom-0 w-[160px]"
                />

                <img
                  src={images.imageOrnament6}
                  className="absolute bottom-0 left-0 w-full"
                />
                <img
                  src={images.imageOrnament1}
                  className="absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2"
                />
              </div>
            </div>

            <div
              className="bg-[#f0dfcf] px-4 pb-56 pt-24"
              style={{
                backgroundImage: `url(${images.imageOrnament3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "bottom center",
              }}
            >
              <div className="text-center">
                <h1
                  className={classNames(
                    solenoidalFont.className,
                    "text-4xl text-[#DAB96B] mb-2",
                  )}
                >
                  dr. Nareswari Dyah Wisesaningrum
                </h1>
                <h2 className="text-[#662B32]">
                  Putri Bapak R. Wahyu Wibihasmara, S.H & <br />
                  Ibu Wiwik Dwi Wisnuningdyah, S.H, M.H
                </h2>
              </div>

              <h1
                className={classNames(
                  hirarkiSignatureFont.className,
                  "text-center my-10 text-xl text-[#662B32]",
                )}
              >
                Dengan
              </h1>

              <div className="text-center">
                <h1
                  className={classNames(
                    solenoidalFont.className,
                    "text-4xl text-[#DAB96B] mb-2",
                  )}
                >
                  IPDA Albertus Bagas Satria, S.TrK, M.H
                </h1>
                <h2 className="text-[#662B32]">
                  Putra Bapak Ir. Ferdinandus Suwarno & <br />
                  Ibu Margaretta Tutik Rahayuningsih, S.Pd
                </h2>
              </div>

              <h1 className="text-center mt-24 mb-4">
                Yang akan diselenggarakan pada:
              </h1>

              <div className="bg-[#662B32] text-[#DAB96B] p-2">
                <div className="flex flex-col gap-4 border-2 border-[#DAB96B] px-4 pt-10 pb-4">
                  <div className="flex gap-4">
                    <span className="mt-1 text-xl">
                      <FaCalendarDay />
                    </span>
                    <span className="text-lg font-bold">
                      Sabtu, 23 November 2024
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-xl">
                      <FaClock />
                    </span>
                    <span>
                      Pukul 11.00-13.00 WIB <br /> (Diawali dengan Prosesi
                      Pedang Pora)
                    </span>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <span className="mt-1 text-xl">
                      <FaBuilding />
                    </span>
                    <span>
                      BALLROOM HOTEL TENTREM YOGYAKARTA <br />
                      Jl. P. Mangkubumi No. 72 A, Cokrodiningratan, Jetis,
                      Yogyakarta
                    </span>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/xVefXsThkPe4vffL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[140px] mx-auto p-2 border border-[#DAB96B] flex gap-2 items-center justify-center"
                  >
                    <span>Google Map</span>
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>

              <h1
                className={classNames(
                  solenoidalFont.className,
                  "mt-14 mb-4 text-center text-xl text-[#662B32]",
                )}
              >
                Sakramen Perkawinan
              </h1>

              <div className="flex flex-col gap-4 border border-[#662B32] p-4 text-[#662B32]">
                <div className="flex gap-4">
                  <span className="mt-1 text-xl">
                    <FaCalendarDay />
                  </span>
                  <span>Jumat, 22 November 2024</span>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-xl">
                    <FaChurch />
                  </span>
                  <span>Gereja Katolik Santo Petrus & Paulus Minomartani</span>
                </div>
              </div>

              <p
                className={classNames(
                  solenoidalFont.className,
                  "text-center mt-10 leading-loose text-[#662B32] text-lg",
                )}
              >
                Merupakan suatu kehormatan dan kebahagiaan bagi kami, <br />
                apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
                restu kepada kedua mempelai
              </p>
            </div>

            <div
              style={{
                backgroundImage: `url(${images.imageBg2})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
              }}
              className="px-4 pt-10 pb-52"
            >
              <img
                src={images.imageLogo2}
                className="w-[120px] mx-auto mb-10"
              />

              <p
                className={classNames(
                  solenoidalFont.className,
                  css["text-shadow"],
                  "text-center px-4 leading-loose mb-4 text-[#662B32]",
                )}
              >
                Sebab pada awal dunia, Allah menjadikan mereka laki-laki dan
                perempuan, sebab itu laki-laki akan meninggalkan ayahnya dan
                ibunya dan bersatu dengan istrinya, sehingga keduanya itu
                menjadi satu daging.
                <br />
                Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu,
                apa yang telah dipersatukan Allah, tidak boleh diceraikan
                manusia.
              </p>

              <p className="text-center font-bold text-[#662B32]">
                Markus 10:6-9
              </p>
            </div>

            <Ads />
          </div>
        )}

        <Particles color="#DAB96B" size={2} sizeMin={1} />
        <Toaster />
        <Music
          musicURL="/assets/musics/sweet-moments.wav"
          play={play}
          setPlay={setPlay}
          hide={hideMusic}
        />
      </div>
    </AssetsLoader>
  );
}
