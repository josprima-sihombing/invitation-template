"use client";

import AssetsLoader from "@/components/assets-loader";
import assets from "./assets";
import photos from "./photos";
import getName from "@/utils/get-name";
import { baloo, chalkboardFont, prodasansFont } from "@/fonts";
import classNames from "classnames";
import { FaRegEnvelope } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import RsvpForm from "@/components/new-rsvp-form";
import { TbCalendarEvent, TbClock, TbMap2, TbWindow } from "react-icons/tb";
import Countdown3 from "@/components/countdown/countdown-3";
import dayjs from "dayjs";
import Ads from "@/components/ads";
import { Toaster } from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Music = dynamic(() => import("@/components/music"), {
  ssr: false,
});

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const openInvitation = () => {
    setOpened(true);
    setPlay(true);
    setHideMusic(false);

    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (opened && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [opened]);

  const guestName = getName();

  return (
    <AssetsLoader assets={{ ...assets, ...photos }}>
      <div
        className={classNames(
          "max-w-2xl mx-auto h-full text-slate-500 overflow-x-hidden",
          prodasansFont.className,
        )}
      >
        <div
          className="h-full min-h-[600px] relative overflow-hidden flex items-center"
          style={{
            backgroundImage: `url(${assets.asset1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full">
            <div className="pt-20 mb-4 sm:mb-12">
              <div className="relative">
                <Fade duration={2000} direction="up" delay={1000} triggerOnce>
                  <p
                    className={classNames(
                      chalkboardFont.className,
                      "text-center text-[#E5B831] text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-8",
                    )}
                  >
                    Ulang Tahun Pertama & <br />
                    Tasyukuran Rumah Baru
                  </p>
                </Fade>

                <div className="absolute top-[-60px] left-[20px]">
                  <Fade direction="left" duration={2000} triggerOnce>
                    <img src={assets.asset7} className="w-[60px] xs:w-[80px]" />
                  </Fade>
                </div>

                <div className="absolute top-[-40px] right-0">
                  <Fade direction="right" duration={2000} triggerOnce>
                    <img src={assets.asset6} className="w-[70px] xs:w-[80px]" />
                  </Fade>
                </div>
              </div>

              <Fade duration={2000} direction="up" delay={2000} triggerOnce>
                <p
                  className={classNames(
                    "text-center text-[#F173B4] text-2xl xs:text-4xl sm:text-5xl",
                    baloo.className,
                  )}
                >
                  Haneen Almahyra Maezurra Khadafi
                </p>
              </Fade>
            </div>

            <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto">
              <Fade duration={2000} delay={2000} direction="up" triggerOnce>
                <img src={photos.photo1} className="w-full" alt="" />
              </Fade>

              <div className="absolute bottom-0 right-[-40px]">
                <Fade duration={2000} delay={2200} direction="up" triggerOnce>
                  <img src={assets.asset3} className="w-[100px]" />
                </Fade>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <Fade duration={2000} delay={2300} direction="up" triggerOnce>
                  <img
                    src={assets.asset2}
                    className="max-w-[unset] h-[160px]"
                  />
                </Fade>
              </div>

              <div className="absolute right-[40px] bottom-0">
                <Fade duration={2000} delay={2400} direction="up" triggerOnce>
                  <img
                    src={assets.asset4}
                    className="absolute w-[80px] right-[40px] bottom-0"
                  />
                </Fade>
              </div>

              <div className="absolute right-0 top-0">
                <Fade duration={2000} delay={2500} direction="up" triggerOnce>
                  <img src={assets.asset5} className="w-[60px]" />
                </Fade>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#EB8989] to-[#E49F9F] p-4 relative">
              <div className="ml-28 flex flex-col">
                <Fade
                  duration={1000}
                  delay={3000}
                  direction="up"
                  cascade
                  triggerOnce
                >
                  <p className="text-white xs:text-lg">
                    Kepada Bapak/Ibu/Saudara/i
                  </p>

                  <p
                    className={classNames(
                      "text-lg xs:text-xl mb-4 font-bold text-white",
                      baloo.className,
                    )}
                  >
                    {guestName}
                  </p>

                  <button
                    className="text-sm font-bold px-4 py-2 rounded-full bg-gradient-to-b from-pink-200 to-pink-600 text-white flex items-center gap-2 self-end"
                    onClick={openInvitation}
                  >
                    <FaRegEnvelope />
                    Buka Undangan
                  </button>
                </Fade>
              </div>

              <div className="absolute left-[-40px] bottom-[-20px]">
                <Fade
                  duration={2000}
                  delay={2500}
                  direction="right"
                  triggerOnce
                >
                  <img src={assets.asset8} className="w-[160px]" />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {opened && (
          <div ref={contentRef}>
            <div
              style={{
                backgroundImage: `url(${assets.asset10})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="px-4 pt-40 pb-32 relative overflow-hidden"
            >
              <Fade direction="up" cascade triggerOnce>
                <p className="px-8 mb-4 sm:mb-12 text-xl sm:text-3xl font-bold text-center">
                  Bismillah...
                </p>
                <p className="px-8 text-center leading-loose mb-4 sm:mb-12 sm:text-xl sm:leading-10">
                  Kami ingin mengundang Bapak/Ibu/Saudara/i untuk merayakan
                  acara ulang tahun pertama putri kami tercinta:
                </p>

                <div className="text-center">
                  <h2
                    className={classNames(
                      baloo.className,
                      "text-[#F173B4] font-bold text-3xl sm:text-5xl",
                    )}
                  >
                    Haneen Almahyra Maezurra Khadafi
                  </h2>

                  <h2
                    className={classNames(
                      chalkboardFont.className,
                      "text-4xl sm:text-6xl mb-4 text-[#E5B831]",
                    )}
                  >
                    Haneen
                  </h2>
                </div>

                <p className="text-center py-4 px-4 font-bold text-xl sm:text-2xl">
                  Sekaligus Acara <br /> Tasyukuran Rumah Baru Kami
                </p>
              </Fade>

              <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 ">
                <Fade duration={2000} triggerOnce direction="down">
                  <img src={assets.asset11} className="max-w-[unset]" />
                </Fade>
              </div>
            </div>

            <div
              className="px-4 py-20"
              style={{
                backgroundImage: `url(${assets.asset1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Fade direction="up" cascade triggerOnce>
                <p className="text-center mb-8 sm:text-xl text-[#E5B831]">
                  Yang akan dilaksanakan pada:
                </p>
                <div className="border-2 rounded-[60px] border-pink-200 px-6 pt-8 pb-4">
                  <div className="flex flex-col gap-6 mb-6">
                    <div className="flex gap-2">
                      <TbCalendarEvent className="text-xl sm:text-3xl mt-1 shrink-0" />
                      <span className="text-lg sm:text-2xl">
                        Sabtu, 4 Januari 2025
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <TbClock className="text-xl sm:text-3xl mt-1 shrink-0" />
                      <span className="text-lg sm:text-2xl">
                        Pukul 13:00 s/d 18:00
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <TbWindow className="text-xl sm:text-3xl mt-1 shrink-0" />
                      <span className="text-lg sm:text-2xl">
                        Jl. Damar III no.22 Sidorukun, <br /> Krakatau
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://maps.app.goo.gl/2S3NnEZgZz2wzVUT7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-gradient-to-b from-pink-200 to-pink-600 text-white inline-flex items-center gap-2"
                    >
                      <TbMap2 className="text-xl sm:text-2xl" />
                      <span className="sm:text-xl">Lihat Maps</span>
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <Countdown3
                    date={dayjs("2025-1-4").toDate()}
                    bgColor="#fff"
                    textColor="#ec4899"
                    borderColor="#fbcfe8"
                  />
                </div>
              </Fade>
            </div>

            <div
              className="px-4 py-12 bg-[#f0dfcf]"
              style={{
                backgroundImage: `url(${assets.asset1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white/40 px-4 pt-12 pb-4">
                <RsvpForm
                  afterSubmit={() => {
                    document
                      .querySelector("#footer")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            </div>

            <div
              className="pt-32 pb-48 px-8 text-center relative overflow-hidden"
              id="footer"
              style={{
                backgroundImage: `url(${assets.asset1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Fade duration={1000} direction="up" cascade triggerOnce>
                <p
                  className={classNames(
                    baloo.className,
                    "text-lg sm:text-2xl mb-4",
                  )}
                >
                  See you There
                </p>
                <p
                  className={classNames(baloo.className, "text-xl sm:text-4xl")}
                >
                  Blessed Parents
                </p>
                <p
                  className={classNames(
                    chalkboardFont.className,
                    "text-3xl sm:text-6xl text-[#E5B831]",
                  )}
                >
                  Dicky & Alfi
                </p>
              </Fade>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <Fade duration={2000} direction="right" triggerOnce>
                  <img
                    src={assets.asset2}
                    className="max-w-[unset] max-h-[180px]"
                  />
                </Fade>
              </div>
            </div>

            <Ads />
          </div>
        )}
      </div>

      <Music
        musicURL="/assets/musics/fairytale.mp3"
        play={play}
        setPlay={setPlay}
        hide={hideMusic}
      />

      {opened && <Particles color="#E5B831" opacity={0.8} />}
      <Toaster />
    </AssetsLoader>
  );
}
