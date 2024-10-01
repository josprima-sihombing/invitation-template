"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
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
import { playfair } from "@/fonts";
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
      <div className="fixed top-0 left-0 h-full w-full flex">
        <div
          className="basis-0 flex items-center justify-center overflow-hidden bg-red-500"
          style={{
            backgroundImage: `url(${images.imageBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={images.imageLogo2} className="w-[80px]" />
        </div>
        <div className="w-full max-w-screen-xs"></div>
      </div>

      <div
        className={classNames(
          "font-serif",
          "relative h-full w-full max-w-screen-xs ml-auto",
        )}
      >
        <div
          className={classNames(
            {
              "pointer-events-none": isOpen,
            },
            "absolute w-full h-full overflow-hidden bg-transparent z-30",
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
                "relative pb-4 pt-12 px-4 h-full z-10 overflow-hidden",
              )}
              style={{
                backgroundImage: `url(${images.imageBg})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            >
              <img src={images.imageLogo2} className="mx-auto w-[80px] mb-6" />
              <p
                className={classNames(
                  css["text-shadow"],
                  "text-center px-4 leading-relaxed text-sm relative z-10",
                )}
              >
                Sebab pada awal dunia, Allah menjadikan mereka laki-laki dan
                perempuan, sebab itu laki-laki akan meninggalkan ayahnya dan
                ibunya dan bersatu dengan istrinya, sehingga keduanya itu
                menjadi satu daging. <br /> Demikianlah mereka bukan lagi dua,
                melainkan satu. Karena itu, apa yang telah dipersatukan Allah,
                tidak boleh diceraikan manusia.
                <br />
                <span className="block mt-6">Markus 10:6-9</span>
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

            <div className="bg-[#f0dfcf] px-8 pb-8 pt-12">
              <p className="text-center text-sm leading-loose mb-10">
                Dengan ungkapan puji syukur atas anugerah dan cinta kasih Allah
                yang Maha Kuasa, mengundang Bapak/Ibu/Saudara/i dalam acara
                Resepsi Pernikahan putra-putri kami tercinta :
              </p>
              <div className="text-center">
                <h1
                  className={classNames(
                    playfair.className,
                    "text-3xl text-[#DAB96B] mb-2",
                  )}
                >
                  dr. Nareswari Dyah Wisesaningrum
                </h1>
                <h2 className="font-bold text-sm">
                  Putri Bapak R. Wahyu Wibihasmara, S.H & <br />
                  Ibu Wiwik Dwi Wisnuningdyah, S.H, M.H
                </h2>
              </div>

              <h1
                className={classNames(
                  "text-center my-10 text-sm tracking-[8px] text-[#662B32]",
                )}
              >
                DENGAN
              </h1>

              <div className="text-center">
                <h1
                  className={classNames(
                    playfair.className,
                    "text-3xl text-[#DAB96B] mb-2",
                  )}
                >
                  IPDA Albertus Bagas Satria, S.TrK, M.H
                </h1>
                <h2 className="font-bold text-sm">
                  Putra Bapak Ir. Ferdinandus Suwarno & <br />
                  Ibu Margaretta Tutik Rahayuningsih, S.Pd
                </h2>
              </div>

              <h1 className="text-center text-sm mt-24 mb-4">
                Yang akan diselenggarakan pada:
              </h1>

              <h1
                className={classNames(
                  playfair.className,
                  "text-xl text-center tracking-[6px] text-[#662B32] mb-4",
                )}
              >
                RESEPSI
              </h1>

              <div className="bg-[#662B32] text-[#DAB96B] p-2 text-sm">
                <div className="flex flex-col gap-4 border-2 border-[#DAB96B] p-4">
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaCalendarDay />
                    </span>
                    <span>Sabtu, 23 November 2024</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaClock />
                    </span>
                    <span>
                      Pukul 11.00-13.00 WIB <br /> (Diawali dengan Prosesi
                      Pedang Pora)
                    </span>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <span className="mt-1 text-sm">
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

              <div className="mt-4">
                <Countdown3
                  date={new Date("2024-11-23")}
                  bgColor="#662B32"
                  textColor="#DAB96B"
                  borderColor="#DAB96B"
                />
              </div>
            </div>

            <div
              className="px-4 pt-10 pb-48"
              style={{
                backgroundImage: `url(${images.imageBg2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
              }}
            >
              <h1
                className={classNames(
                  playfair.className,
                  "text-center text-[#662B32] mb-4",
                )}
              >
                SAKRAMEN PERKAWINAN
              </h1>

              <div className="bg-[#662B32] text-[#DAB96B] p-2 text-sm">
                <div className="flex flex-col gap-4 border-2 border-[#DAB96B] p-4">
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaCalendarDay />
                    </span>
                    <span>Jumat, 22 November 2024</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaChurch />
                    </span>
                    <span>
                      Gereja Katolik Santo Petrus & Paulus Minomartani
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm">
                <p className={classNames("mt-10 leading-loose")}>
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, <br />
                  apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan
                  doa restu kepada kedua mempelai
                </p>

                <p className="my-10">Kami yang berbahagia</p>
                <p className="mb-4">
                  Putri Bapak R. Wahyu Wibihasmara, S.H &<br /> Ibu Wiwik Dwi
                  Wisnuningdyah, S.H, M.H
                </p>

                <p className="mb-4">
                  Putra Bapak Ir. Ferdinandus Suwarno &<br /> Ibu Margaretta T
                  utik Rahayuningsih, S.Pd
                </p>

                <p className="tracking-wider">AYES & BERTUS</p>
              </div>
            </div>

            <div
              className="px-4 py-12 bg-[#f0dfcf]"
              style={{
                backgroundImage: `url(${images.imageOrnament3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "bottom center",
              }}
            >
              <div className="bg-white/40 px-4 pt-12 pb-4">
                <RsvpForm />
              </div>
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
