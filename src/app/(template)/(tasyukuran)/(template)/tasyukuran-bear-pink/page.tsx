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
import BankCard from "@/components/bank-card";

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
          <div
            className="relative pt-48 pb-32 px-8"
            style={{
              backgroundImage: `url(${images.image1})`,
              backgroundSize: "contain",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={images.image6}
              className="w-[260px] absolute left-1/2 top-0 -translate-x-1/2 translate-y-[-30px]"
            />
            <div className="border border-solid border-[#FF7AAF] rounded-lg px-4 pt-16 pb-44 backdrop-blur-sm">
              <h1
                className={classNames(
                  amarante.className,
                  "text-center text-xl text-[#4A3C5E] mb-12",
                )}
              >
                Assalamualaikum Warahmatullahi Wabarakatuh
              </h1>
              {guestName && (
                <div>
                  <h2>Yang terhormat,</h2>
                  <h2>{guestName}</h2>
                </div>
              )}
              <h1 className="font-semibold text-center text-lg text-[#FF3888]">
                Dengan memohon Rahmat dan Ridho Allah SWT, <br />
                Kami sekeluarga bermaksud untuk mengundang Bapak/Ibu/Saudara/i{" "}
                <br />
                pada acara Tasyakuran Aqigah Putri kami
              </h1>
            </div>

            <div className="px-4 pt-20 pb-12 rounded-3xl bg-[#FF7AAF] w-[calc(100%-32px)] mx-auto relative translate-y-[-40px]">
              <img
                src={images.image7}
                className="w-[140px] absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-70px]"
              />
              <h1 className="text-center font-semibold text-lg text-white mb-6">
                Detail Acara
              </h1>

              <div className="text-white flex flex-col gap-4">
                <div className="flex gap-4">
                  <span className="text-white mt-1 text-xl">
                    <FaCalendarDay />
                  </span>
                  <span>Senin, 22 Maret 2024</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white mt-1 text-xl">
                    <FaClock />
                  </span>
                  <span>Mulai jam 08:00 pagi</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white mt-1 text-xl">
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

            <Countdown3
              date={dayjs().add(30, "day").toDate()}
              bgColor="#FF7AAF"
              textColor="#fff"
            />
          </div>

          <div className="relative bg-[#8D8695] px-8 py-20">
            <img
              src={images.image10}
              className="w-[140px] absolute bottom-full left-[10px] translate-y-[100px]"
            />
            <div className="bg-white rounded-3xl px-4 py-8">
              <RsvpForm language="id" />
            </div>
          </div>

          <div className="relative bg-[#FF7AAF] px-8 pt-20 pb-28 z-20">
            <img
              src={images.image11}
              className="w-[120px] absolute right-[10px] top-0 translate-y-[-40px]"
            />
            <div className="bg-white/80 px-4 pt-20 pb-12 rounded-3xl">
              <h1
                className={classNames(
                  amarante.className,
                  "text-center text-2xl mb-8 text-[#4A3C5E]",
                )}
              >
                Amplop Digital
              </h1>
              <p className="font-semibold text-center text-lg mb-8 text-[#4A3C5E]">
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
                memberi kado secara cashless.
              </p>

              <BankCard name="Baluhap" number="696969696969" />
            </div>

            <img
              src={images.image9}
              className="w-[140px] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[80px]"
            />
          </div>

          <div
            className="relative bg-white px-8 pt-32 pb-64 overflow-hidden"
            style={{
              backgroundImage: `url(${images.image1})`,
              backgroundSize: "contain",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="font-semibold text-lg text-center mb-4 text-[#4A3C5E]">
              Semoga Allah SWT menjadikan putri kami anak yang soleha, cerdas,
              berbakti kepada orang tua, dan menjadi kebanggaan keluarga Aamiin
              Yaa Rabbal 'Alaamiin...
            </p>
            <p className="font-semibold text-lg text-center text-[#4A3C5E] mb-12">
              Atas kehadiran serta do'anya, kami Ucapkan terima kasih
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>

            <img src={images.image8} className="w-[180px] mx-auto mb-12" />
            <p
              className={classNames(
                hirarkiSignatureFont.className,
                "text-center text-xl text-[#4A3C5E] mb-2",
              )}
            >
              Kami yang Berbahagia
            </p>
            <p className="font-semibold text-center text-2xl text-[#FF3888]">
              Habibie dan Ainun
            </p>

            <div className="absolute bottom-0 left-0 w-full h-[120px]">
              <div className="absolute w-[120%] h-[200px] rounded-[100%] bg-[#FF7AAF] top-0 left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-[120%] h-[200px] rounded-[100%] bg-[#FF3888] top-0 left-1/2 -translate-x-1/2 translate-y-[30px]"></div>

              <img
                src={images.image4}
                className="w-[190px] absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[20px]"
              />
            </div>
          </div>
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
