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
import {
  mitr,
  hirarkiSignatureFont,
  amarante,
  supravitally,
  solenoidalFont,
} from "@/fonts";
import EnvelopeIcon from "@/components/icons/envelope";
import BankCard from "@/components/bank-card";
import AssetsLoader from "@/components/assets-loader";
import Ads from "@/components/ads";
import { images } from "./assets";
import { galleryImages } from "./galleries";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            backgroundImage: `url(${images.imagebgPrimary})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={images.imagebgGroom}
            className="absolute w-full h-full object-cover opacity-50"
          />

          <div className={classNames(css.leftPole)}>
            <img
              src={images.image3}
              className="max-w-[unset] w-[120px] absolute left-[-20px] top-0 translate-y-[-80px] rotate-[30deg]"
            />
          </div>

          <div className={classNames(css.rightPole)}>
            <img
              src={images.image4}
              className="max-w-[unset] w-[100px] absolute right-[-10px] top-[-80px] rotate-[-15deg]"
            />
          </div>

          <div className="relative px-16 pt-[100px] pb-[100px] h-full text-center flex flex-col">
            <h1
              className={classNames(
                hirarkiSignatureFont.className,
                css.textShadow,
                "text-[#EAF4ED] text-2xl",
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
                  "flex-grow flex flex-col justify-center gap-2 text-[#EAF4ED]",
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
                    "text-[#dddddd] text-lg",
                  )}
                >
                  Kepada:
                </h1>
                <h1 className="font-medium text-lg text-[#dddddd] mb-6">
                  {guestName || "Bapak/Ibu/Saudara/i"}
                </h1>
                <button
                  className={classNames(css.button)}
                  onClick={openInvitation}
                >
                  <span>
                    <EnvelopeIcon size={16} color="#EAF4ED" />
                  </span>
                  <span className="text-[#EAF4ED] text-sm font-medium">
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
                "bg-[#EAF4ED] text-[#53996E] pt-[10px] px-[35px] pb-[40px] relative top-[-10px]",
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
          <div className="relative" ref={invitationContentRef}>
            <div
              className="relative overflow-hidden"
              style={{
                backgroundImage: `url(${images.imagebgSecondary})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={images.image5}
                className="max-w-[unset] absolute w-[calc(100%+200px)] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
              />

              <img
                src={images.image2}
                className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-[-100px] w-[240px]"
              />

              <div className="px-8 py-24 text-center">
                <p
                  className={classNames(
                    solenoidalFont.className,
                    "leading-loose text-lg text-[#242e28] mb-8",
                  )}
                >
                  Tanpa mengurangi rasa hormat, kami bermaksud mengundang
                  bapak/ibu/saudara/i untuk hadir pada acara pernikahan kami.
                </p>

                <p
                  className={classNames(
                    solenoidalFont.className,
                    "leading-loose text-lg text-[#242e28] mb-8",
                  )}
                >
                  Kami yang berbahagia:
                </p>

                <div className="flex flex-col gap-12">
                  <div>
                    <div className="relative w-[200px] h-[240px] mx-auto mb-4">
                      <img
                        src={images.image11}
                        className="absolute max-w-[unset] w-[240px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                      <img
                        src={images.imagePersonA}
                        className="w-full h-full object-cover rounded-[100%]"
                      />
                    </div>

                    <h1
                      className={classNames(
                        hirarkiSignatureFont.className,
                        "text-[#53996E] text-4xl",
                      )}
                    >
                      Asep
                    </h1>
                  </div>

                  <h2
                    className={classNames(
                      hirarkiSignatureFont.className,
                      "text-2xl text-[#53996E]",
                    )}
                  >
                    dengan
                  </h2>

                  <div>
                    <div className="relative w-[200px] h-[240px] mx-auto mb-4">
                      <img
                        src={images.image11}
                        className="absolute max-w-[unset] w-[240px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                      <img
                        src={images.imagePersonB}
                        className="w-full h-full object-cover rounded-[100%]"
                      />
                    </div>

                    <h1
                      className={classNames(
                        hirarkiSignatureFont.className,
                        "text-[#53996E] text-4xl",
                      )}
                    >
                      Suharmi
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              style={{
                backgroundImage: `url(${images.imagebgPrimary})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-[80px] -translate-y-1/2 overflow-hidden">
                <img
                  src={images.image5}
                  className="max-w-[unset] absolute h-full left-1/2 -translate-x-1/2"
                />
              </div>

              <div className="px-8 py-24">
                <div className="mb-12">
                  <Countdown3
                    date={dayjs().add(30, "day").toDate()}
                    bgColor="#EAF4ED"
                    textColor="#53996E"
                    borderColor="#53996E"
                  />
                </div>

                <div className="border border-solid border-[#EAF4ED] relative px-4 pt-12 pb-20 mb-20">
                  <img
                    src={images.image8}
                    className="absolute w-[150px] left-1/2 top-full -translate-x-1/2 -translate-y-1/2"
                  />

                  <h1
                    className={classNames(
                      hirarkiSignatureFont.className,
                      "text-[#EAF4ED] text-center text-2xl mb-8",
                    )}
                  >
                    Akad Nikah
                  </h1>

                  <div className="text-[#EAF4ED] flex flex-col gap-4">
                    <div className="flex gap-4">
                      <span className="text-[#EAF4ED] mt-1 text-xl">
                        <FaCalendarDay />
                      </span>
                      <span>Senin, 22 Maret 2024</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#EAF4ED] mt-1 text-xl">
                        <FaClock />
                      </span>
                      <span>Mulai jam 08:00 pagi</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#EAF4ED] mt-1 text-xl">
                        <FaBuilding />
                      </span>
                      <span>
                        Bertempat di <br />
                        Hopa Place
                        <br />
                        Jl. Merdeka no 69
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-solid border-[#EAF4ED] relative px-4 pt-12 pb-20">
                  <img
                    src={images.image8}
                    className="absolute w-[150px] left-1/2 top-full -translate-x-1/2 -translate-y-1/2"
                  />

                  <h1
                    className={classNames(
                      hirarkiSignatureFont.className,
                      "text-[#EAF4ED] text-center text-2xl mb-8",
                    )}
                  >
                    Resepsi
                  </h1>

                  <div className="text-[#EAF4ED] flex flex-col gap-4">
                    <div className="flex gap-4">
                      <span className="text-[#EAF4ED] mt-1 text-xl">
                        <FaCalendarDay />
                      </span>
                      <span>Senin, 22 Maret 2024</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#EAF4ED] mt-1 text-xl">
                        <FaClock />
                      </span>
                      <span>Mulai jam 18:00 malam</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#EAF4ED] mt-1 text-xl">
                        <FaBuilding />
                      </span>
                      <span>
                        Bertempat di <br />
                        Hopa Place
                        <br />
                        Jl. Merdeka no 69
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="px-8 py-12"
              style={{
                backgroundImage: `url(${images.imagebgSecondary})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-[#fff] px-4 py-8 rounded-lg">
                <RsvpForm language="id" />
              </div>
            </div>

            <div
              className="relative pt-12 pb-36 px-8 overflow-hidden"
              style={{
                backgroundImage: `url(${images.imagebgPrimary})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={images.image5}
                className="max-w-[unset] absolute w-[calc(100%+200px)] bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"
              />

              <img
                src={images.image2}
                className="absolute bottom-0 translate-y-[40px] w-[240px] left-1/2 -translate-x-1/2"
              />

              <div className="bg-[#EAF4ED] px-4 pt-20 pb-12 rounded-3xl mb-12">
                <h1
                  className={classNames(
                    amarante.className,
                    "text-center text-2xl mb-8 text-[#242e28]",
                  )}
                >
                  Amplop Digital
                </h1>
                <p className="font-medium text-center text-lg mb-8 text-[#242e28]">
                  Doa Restu Anda merupakan karunia yang sangat berarti bagi
                  kami. Namun jika memberi adalah ungkapan tanda kasih Anda,
                  Anda dapat memberi kado secara cashless.
                </p>

                <BankCard name="Baluhap" number="696969696969" />
              </div>
            </div>

            <div className="bg-[#EAF4ED] px-4 py-12">
              <h1
                className={classNames(
                  hirarkiSignatureFont.className,
                  "text-center text-3xl mb-8 text-[#53996E]",
                )}
              >
                Our Moments
              </h1>

              <Carousel showIndicators showArrows infiniteLoop autoPlay>
                {galleryImages.map((imageUrl) => (
                  <div key={imageUrl} className="w-full h-[500px] bg-[#6e8777]">
                    <img
                      src={imageUrl}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div
              className="relative pt-12 pb-36 px-8 overflow-hidden"
              style={{
                backgroundImage: `url(${images.imagebgPrimary})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="font-medium text-lg text-center text-[#EAF4ED] mb-12">
                Atas kehadiran serta do'anya, kami Ucapkan terima kasih.
              </p>

              <img src={images.image8} className="w-[180px] mx-auto mb-12" />
              <p
                className={classNames(
                  hirarkiSignatureFont.className,
                  "text-center text-2xl text-[#EAF4ED] mb-4",
                )}
              >
                Kami yang Berbahagia
              </p>
              <p
                className={classNames(
                  supravitally.className,
                  "font-semibold text-center text-3xl text-[#EAF4ED]",
                )}
              >
                Asep dan Suharmi
              </p>
            </div>

            <Ads />
          </div>
        )}

        <Particles color="#EAF4ED" opacity={0.8} />
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
