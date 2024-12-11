"use client";

import AssetsLoader from "@/components/assets-loader";
import assets from "./assets";
import photos from "./photos";
import getName from "@/utils/get-name";
import { sofiaSans, playfair, hirarkiSignatureFont } from "@/fonts";
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
import { FaCopy } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import { galleries } from "./galleries";
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
          sofiaSans.className,
        )}
      >
        <div
          className="h-full min-h-[600px] relative overflow-hidden"
          style={{
            backgroundImage: `url(${assets.asset1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-3/4 relative">
            <img
              src={photos.photo1}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute w-full h-[200px] bg-gradient-to-b from-white/0 to-white left-0 bottom-0"></div>
          </div>

          <div className="relative z-10">
            <div className="-translate-y-10 px-4">
              <Fade direction="up" cascade triggerOnce delay={1000}>
                <h1>The Wedding of</h1>
                <h1
                  className={classNames(
                    "text-3xl mb-4 text-pink-500 font-bold",
                    playfair.className,
                  )}
                >
                  Anggi & Ican
                </h1>
                <p>Kepada Bapak/Ibu/Saudara/i</p>
                <p className="text-lg mb-4 text-slate-500 font-bold">
                  {guestName}
                </p>

                <button
                  className="px-4 py-2 rounded-full bg-gradient-to-b from-pink-200 to-pink-600 text-white flex items-center gap-2"
                  onClick={openInvitation}
                >
                  <FaRegEnvelope />
                  Buka Undangan
                </button>
              </Fade>
            </div>
          </div>

          <div className="absolute top-0 left-0">
            <Fade delay={200} triggerOnce>
              <img
                src={assets.asset6}
                alt=""
                className="w-[120px] xs:w-[130px] sm:w-[200px] translate-x-[-10px] translate-y-[-10px]"
              />
            </Fade>
          </div>

          <div className="absolute top-0 right-0">
            <Fade delay={800} triggerOnce>
              <img
                src={assets.asset5}
                alt=""
                className="w-[300px] translate-x-[30px] translate-y-[-10px]"
              />
            </Fade>
          </div>

          <div className="absolute bottom-0 right-0">
            <Fade delay={1000} triggerOnce>
              <img
                src={assets.asset4}
                alt=""
                className="w-[200px] translate-x-[60px] translate-y-[20px]"
              />
            </Fade>
          </div>
        </div>

        {opened && (
          <div ref={contentRef}>
            <div
              style={{
                backgroundImage: `url(${assets.asset3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="px-4 py-20"
            >
              <Fade direction="up" cascade triggerOnce>
                <p
                  className={classNames(
                    "text-center font-bold",
                    playfair.className,
                  )}
                >
                  Bismillah
                </p>
                <p
                  className={classNames(
                    "px-8 text-center leading-loose mb-12",
                    playfair.className,
                  )}
                >
                  Dengan ungkapan puji syukur atas anugerah dan cinta kasih
                  Allah yang Maha Kuasa, mengundang Bapak/Ibu/Saudara/i dalam
                  acara Resepsi Pernikahan putra-putri kami tercinta:
                </p>

                <div className="text-center">
                  <h2
                    className={classNames(
                      playfair.className,
                      "text-pink-500 font-bold text-3xl",
                    )}
                  >
                    Anggi Lusiana Goni
                  </h2>

                  <h2
                    className={classNames(
                      hirarkiSignatureFont.className,
                      "text-2xl mb-8",
                    )}
                  >
                    Anggi
                  </h2>

                  <p>
                    Putri Dari Bapak Apollo Goni <br /> dan Almh. Ibu Misnawati
                    mokodompit
                  </p>
                </div>

                <p
                  className={classNames(
                    playfair.className,
                    "text-center py-8 tracking-widest font-bold",
                  )}
                >
                  DENGAN
                </p>

                <div className="text-center">
                  <h2
                    className={classNames(
                      playfair.className,
                      "text-pink-500 font-bold text-3xl",
                    )}
                  >
                    Mohamad Iksan lasinggaru
                  </h2>

                  <h2
                    className={classNames(
                      hirarkiSignatureFont.className,
                      "text-2xl mb-8",
                    )}
                  >
                    Ican
                  </h2>

                  <p>
                    Putra Dari Alm. Bapak L Lasinggaru BA
                    <br /> dan Ibu yurico dasinangon
                  </p>
                </div>
              </Fade>
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
                <p className="text-center mb-8">Yang akan dilaksanakan pada:</p>
                <div>
                  <p
                    className={classNames(
                      playfair.className,
                      "text-center text-pink-500 text-2xl mb-2",
                    )}
                  >
                    Akad
                  </p>

                  <div className="border-2 rounded-[60px] border-pink-500 px-6 pt-8 pb-4">
                    <div className="flex flex-col gap-6 mb-6">
                      <div className="flex gap-2">
                        <TbCalendarEvent className="text-xl mt-1 shrink-0" />
                        <span className="text-lg">Sabtu, 21 Desember 2024</span>
                      </div>
                      <div className="flex gap-2">
                        <TbClock className="text-xl mt-1 shrink-0" />
                        <span className="text-lg">Pukul 08.00 pagi</span>
                      </div>
                      <div className="flex gap-2">
                        <TbWindow className="text-xl mt-1 shrink-0" />
                        <span className="text-lg">
                          Rumah mempelai wanita,
                          <br /> Motoboi Besar
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <a
                        href="https://maps.app.goo.gl/2kpaFyyxnZSkTAMj9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-gradient-to-b from-pink-200 to-pink-600 text-white inline-flex items-center gap-2"
                      >
                        <TbMap2 className="text-xl" />
                        <span>Lihat Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-12"></div>

                <div>
                  <p
                    className={classNames(
                      playfair.className,
                      "text-center text-pink-500 text-2xl mb-2",
                    )}
                  >
                    Resepsi
                  </p>

                  <div className="border-2 rounded-[60px] border-pink-500 px-6 pt-8 pb-4">
                    <div className="flex flex-col gap-6 mb-6">
                      <div className="flex gap-2">
                        <TbCalendarEvent className="text-xl mt-1 shrink-0" />
                        <span className="text-lg">Sabtu, 21 Desember 2024</span>
                      </div>
                      <div className="flex gap-2">
                        <TbClock className="text-xl mt-1 shrink-0" />
                        <span className="text-lg">Pukul 10.00 s/d Selesai</span>
                      </div>
                      <div className="flex gap-2">
                        <TbWindow className="text-xl mt-1 shrink-0" />
                        <span className="text-lg">
                          Rumah mempelai wanita,
                          <br /> Motoboi Besar
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <a
                        href="https://maps.app.goo.gl/2kpaFyyxnZSkTAMj9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-gradient-to-b from-pink-200 to-pink-600 text-white inline-flex items-center gap-2"
                      >
                        <TbMap2 className="text-xl" />
                        <span>Lihat Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <Countdown3
                    date={dayjs("2024-12-21").toDate()}
                    bgColor="#fff"
                    textColor="#ec4899"
                    borderColor="#ec4899"
                  />
                </div>
              </Fade>
            </div>

            <div
              className="px-8 py-20 text-center"
              style={{
                backgroundImage: `url(${assets.asset3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Fade direction="up" cascade triggerOnce>
                <p className={classNames("leading-loose", playfair.className)}>
                  Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                  menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                  agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                  menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir.
                </p>

                <p className="font-bold text-xl mt-4">QS. Ar-Rum Ayat 21</p>
              </Fade>
            </div>

            <div
              className="px-8 py-20 text-center"
              style={{
                backgroundImage: `url(${assets.asset1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Fade direction="up" cascade triggerOnce>
                <p className="leading-loose mb-12">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, <br />
                  apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan
                  doa restu kepada kedua mempelai
                </p>
                <p className="font-bold italic mb-4">Kami yang berbahagia:</p>
                <p className="mb-2">
                  Putri Dari Bapak Apollo Goni <br /> dan Almh. Ibu Misnawati
                  mokodompit
                </p>
                <p className="mb-8">
                  Putra Dari Alm. Bapak L Lasinggaru BA
                  <br /> dan Ibu yurico dasinangon
                </p>

                <div
                  className={classNames(
                    hirarkiSignatureFont.className,
                    "flex items-center justify-center gap-1 text-3xl text-pink-500",
                  )}
                >
                  <span>Anggi</span>
                  <span>&</span>
                  <span className="ml-[-4px]">Ican</span>
                </div>
              </Fade>
            </div>

            <div
              className="px-4 py-12 bg-[#f0dfcf]"
              style={{
                backgroundImage: `url(${assets.asset3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white/40 px-4 pt-12 pb-4">
                <RsvpForm
                  afterSubmit={() => {
                    document
                      .querySelector("#amplop-digital")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            </div>

            <div
              className="py-20 px-8"
              id="amplop-digital"
              style={{
                backgroundImage: `url(${assets.asset3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Fade direction="up" cascade triggerOnce>
                <p
                  className={classNames(
                    "text-center text-2xl mb-4 font-bold",
                    playfair.className,
                  )}
                >
                  Amplop Digital
                </p>
                <p className="text-center text-lg mb-8 leading-loose">
                  Doa Restu Anda merupakan karunia yang sangat berarti bagi
                  kami. Namun jika memberi adalah ungkapan tanda kasih Anda,
                  Anda dapat memberi kado secara cashless.
                </p>

                <div>
                  <div className="p-4 bg-gradient-to-b from-blue-800 to-blue-950 rounded-xl aspect-[3/1.8] max-w-[280px] mx-auto flex flex-col justify-between border border-white drop-shadow-2xl">
                    <h1 className="text-yellow-400">Bank Mandiri</h1>

                    <div>
                      <p className="text-lg text-white font-bold">
                        1500032932301
                      </p>
                      <p className="text-white">
                        a/n: Mohamad Iksan lasinggaru
                      </p>
                    </div>
                  </div>

                  <button
                    className="flex gap-2 items-center bg-white rounded-lg px-2 py-1 mx-auto mt-3 text-[#00529C]"
                    onClick={() => {
                      navigator.clipboard.writeText("1500032932301");
                      toast.success("No.Rekening disalin!", {
                        position: "bottom-center",
                      });
                    }}
                  >
                    <FaCopy />
                    <span>Salin No.Rekening</span>
                  </button>
                </div>

                <div className="my-12"></div>

                <div>
                  <div className="p-4 bg-gradient-to-b from-red-700 to-red-900 rounded-xl aspect-[3/1.8] max-w-[280px] mx-auto flex flex-col justify-between border border-white drop-shadow-2xl">
                    <h1 className="text-yellow-400">Bank Sulut</h1>

                    <div>
                      <p className="text-lg text-white font-bold">
                        00202030066140
                      </p>
                      <p className="text-white">
                        a/n: Mohamad Iksan lasinggaru
                      </p>
                    </div>
                  </div>

                  <button
                    className="flex gap-2 items-center bg-white rounded-lg px-2 py-1 mx-auto mt-3 text-[#00529C]"
                    onClick={() => {
                      navigator.clipboard.writeText("00202030066140");
                      toast.success("No.Rekening disalin!", {
                        position: "bottom-center",
                      });
                    }}
                  >
                    <FaCopy />
                    <span>Salin No.Rekening</span>
                  </button>
                </div>
              </Fade>
            </div>

            <div
              className="px-4 py-20"
              style={{
                backgroundImage: `url(${assets.asset1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1
                className={classNames(
                  "text-center mb-8 text-pink-500 flex justify-center items-center gap-1",
                )}
              >
                <span
                  className={classNames(
                    playfair.className,
                    "font-bold text-2xl",
                  )}
                >
                  Our
                </span>
                <span
                  className={classNames(
                    hirarkiSignatureFont.className,
                    "text-3xl mb-2",
                  )}
                >
                  Moments
                </span>
              </h1>

              <Carousel showIndicators showArrows infiniteLoop autoPlay>
                {Object.keys(galleries).map((key) => (
                  <div
                    key={galleries[key as keyof typeof galleries]}
                    className="w-full h-[400px] bg-transparent p-4"
                  >
                    <img
                      src={galleries[key as keyof typeof galleries]}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <Ads />
          </div>
        )}
      </div>

      <Music
        musicURL="https://ni.rumahundangan.id/wp-content/uploads/2024/11/Tiara-Andini-Arsy-Widianto-Lagu-Pernikahan-Kita-1.53.mp3"
        play={play}
        setPlay={setPlay}
        hide={hideMusic}
      />

      <Particles color="#f9a8d4" opacity={0.8} />
      <Toaster />
    </AssetsLoader>
  );
}
