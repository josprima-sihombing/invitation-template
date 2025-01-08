"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import assets from "./assets";
import photos from "./photos";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
import dayjs from "dayjs";
import RsvpForm from "@/components/rsvp-form-2";
import Countdown3 from "@/components/countdown/countdown-3";
import {
  FaBuilding,
  FaCalendarDay,
  FaClock,
  FaMapLocation,
} from "react-icons/fa6";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { sofiaSans, ramadhanish, baloo } from "@/fonts";
import EnvelopeIcon from "@/components/icons/envelope";
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
    <AssetsLoader assets={{...assets, photo4: photos.photo4, photo6: photos.photo6}}>
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
            backgroundImage: `url(${assets.assetbg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        >
          <div
            className={classNames(
              css.blueGradient,
              css.coverContent,
              "h-full rounded-t-[140px] p-[20px] scale-[3] opacity-0",
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
                    src={photos.photo4}
                    className="w-[205px] h-[205px] object-cover rounded-[50%] border-[5px] border-solid border-[#D3A043] shadow-lg mx-auto"
                  />

                  <h1
                    className={classNames(
                      baloo.className,
                      css.name,
                      "text-[#fff] text-3xl relative top-[-20px]",
                    )}
                  >
                    Ashraf Bilfaqih Putra
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

          <img src={assets.asset6} className="absolute top-0 left-0 w-full" />

          <div className="absolute left-[10px] top-0">
            <img src={assets.asset4} className="w-[30px]" />
            <img
              src={assets.asset4}
              className="w-[20px] absolute left-[30px] top-0"
            />
          </div>

          <div className="absolute right-[10px] top-0">
            <img src={assets.asset4} className="w-[25px]" />
            <img
              src={assets.asset4}
              className="w-[40px] max-w-[unset] absolute right-[25px] top-0"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full pointer-events-none">
            <img
              src={assets.asset1}
              className="w-[100px] absolute right-0 bottom-[30px]"
            />
            <img
              src={assets.asset2}
              className="w-[200px] absolute left-[-40px] bottom-[30px]"
            />

            <div className="w-full overflow-hidden">
              <img
                src={assets.asset3}
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
              backgroundImage: `url(${assets.assetcoverleft})`,
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
              backgroundImage: `url(${assets.assetcoverright})`,
              backgroundSize: "cover",
              backgroundPosition: "top left",
            }}
          />
        </div>

        {isOpen && (
          <div ref={invitationContentRef}>
            <div
              className="px-8 pt-[60px] pb-[220px] relative"
              style={{
                backgroundImage: `url(${assets.assetbg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
              }}
            >
              <div className="absolute left-[10px] top-0">
                <img src={assets.asset4} className="w-[30px]" />
                <img
                  src={assets.asset4}
                  className="w-[20px] absolute left-[30px] top-0"
                />
              </div>

              <div className="absolute right-[10px] top-0">
                <img src={assets.asset4} className="w-[20px]" />
              </div>

              <div className="text-center bg-white/50 shadow-lg rounded-xl px-4 py-12">
                <p className="mb-4">
                  Assalamualaikum Warahmatullahi Wabarakatuh,
                </p>
                <p className="mb-8">
                  Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
                  Tasyakuran Aqiqoh Putra kami
                </p>
                <img
                  src={photos.photo6}
                  className="rounded-[50%] shadow-lg border-solid border-[5px] border-[#FFD68C] mb-8"
                />
                <p
                  className={classNames(
                    baloo.className,
                    "text-2xl text-[#D3A043]",
                  )}
                >
                  Ashraf Bilfaqih Putra
                </p>
                <p className="font-bold">Putra Dari Agus dan Arini</p>
              </div>
            </div>

            <div className="bg-[#FFD68C] relative px-4 pb-8">
              <img
                src={assets.asset5}
                className="absolute w-[160px] left-1/2 -translate-x-1/2 top-0 translate-y-[-200px]"
              />

              <div className="relative bg-white max-w-[320px] mx-auto px-4 py-12 rounded-3xl shadow-lg translate-y-[-50px] border-[5px] border-[#FFD68C]">
                <p className="text-center mb-4">Yang dilaksanakan pada:</p>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex gap-2 items-center">
                    <span className="mb-[4px]">
                      <FaCalendarDay />
                    </span>
                    <span className="font-bold text-lg">
                      Sabtu, 18 Januari 2025
                    </span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="mb-[4px]">
                      <FaClock />
                    </span>
                    <span className="font-bold">Jam 10.00 WITA</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="mb-[4px]">
                      <FaBuilding />
                    </span>
                    <span>
                      Bertempat di Perumahan Griya Paniki Indah, <br />
                      Jln. Apel V no. 16
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/maps?q=1.5418643951416016%2C124.9068832397461&z=17&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 items-center border border-blue-500 w-fit mx-auto px-4 py-2 rounded-lg text-blue-500"
                >
                  <span>
                    <FaMapLocation />
                  </span>
                  <span>Map Lokasi</span>
                </a>
              </div>

              <Countdown3
                date={dayjs("2025-01-18").toDate()}
                bgColor="#7EC1F5"
              />
            </div>

            <div
              id="pray"
              className="relative pt-[100px] pb-4"
              style={{
                backgroundImage: `url(${assets.assetbg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
              }}
            >
              <img
                src={assets.asset6}
                className="absolute w-full left-0 top-0 translate-y-[-50px]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                <img
                  src={photos.photo6}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo1}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo2}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo3}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo4}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo5}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo7}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <img
                  src={photos.photo8}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="px-8 pt-12 pb-[120px] bg-[#7EC1F5]">
              <div className="bg-white px-4 py-8 rounded-2xl border-[2px] border-[#FFD68C]">
                <RsvpForm
                  afterSubmit={() => {
                    document.getElementById("pray")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                />
              </div>
            </div>

            <div
              id="pray"
              className="relative pt-[100px] pb-[160px]"
              style={{
                backgroundImage: `url(${assets.assetbg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
              }}
            >
              <img
                src={assets.asset6}
                className="absolute w-full left-0 top-0 translate-y-[-50px]"
              />

              <div className="px-8">
                <div className="text-center bg-[#FFD68C] px-12 py-20 border-[5px] border-[#FFE8C3] rounded-tl-[68px] rounded-br-[68px] mb-20">
                  <p className="leading-[180%] text-lg mb-8">
                    Dan orang-orang yang berkata, “Ya Tuhan kami, anugerahkanlah
                    kepada kami pasangan kami dan keturunan kami sebagai
                    penyenang hati (kami), dan jadikanlah kami pemimpin bagi
                    orang-orang yang bertakwa.”
                  </p>
                  <p className="text-xl font-bold">(QS. AL-FURQAN : 74)</p>
                </div>

                <p className="text-center mb-4">
                  Atas kehadiran Bapak/Ibu/Saudara/i Kami ucapkan terima kasih
                </p>
                <p className="text-center mb-20">
                  Wassalamualaikum Warahmatullahi Wabarakatuh
                </p>
              </div>

              <div
                className={classNames(
                  css.nameBox,
                  "bg-[#7EC1F5] text-white px-8 py-12 text-center",
                )}
              >
                <p className="mb-2">Kami yang berbahagia:</p>
                <p className="text-xl font-bold">
                  Agus &<br /> Arini
                </p>
              </div>

              <img
                src={assets.asset7}
                className="absolute w-[200px] bottom-0 left-1/2 -translate-x-1/2"
              />

              <div className="absolute w-full h-[40px] bottom-0">
                <div className="w-full h-full bg-[#D3A043] rounded-t-[100%]"></div>
              </div>
            </div>
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
