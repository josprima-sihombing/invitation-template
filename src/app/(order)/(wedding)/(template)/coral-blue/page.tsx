"use client";

import AssetsLoader from "@/components/assets-loader";
import { assets } from "./assets";
import { photos } from "./photos";

import css from "./style.module.scss";
import classNames from "classnames";
import { hirarkiSignatureFont, sofiaSans, solenoidalFont } from "@/fonts";
import getName from "@/utils/get-name";
import dynamic from "next/dynamic";
import { type CSSProperties, useMemo, useState } from "react";
import {
  TbBrandInstagram,
  TbBuildingChurch,
  TbCalendarEvent,
  TbCalendarPlus,
  TbClock,
  TbMap2,
  TbWindow,
} from "react-icons/tb";

import "animate.css";
import { Fade } from "react-awesome-reveal";
import Countdown from "react-countdown";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

const Music = dynamic(() => import("@/components/new-music"), {
  ssr: false,
});

const bgImage1Style: CSSProperties = {
  backgroundImage: `url(${assets.asset1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const bgImage2Style: CSSProperties = {
  backgroundImage: `url(${assets.asset3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);

  const guestName = useMemo(() => getName(), []);

  const calendarURL = useMemo(() => {
    const url = new URL("https://www.google.com/calendar/render");

    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "Wedding of Adi dan Yuli");
    url.searchParams.set("dates", "20251225T110000/20251225T130000"); //YYYYMMDDTHHMMSS
    url.searchParams.set("location", "Ballroom Hotel Tentrem, Yogyakarta");
    url.searchParams.set("details", "Resepsi pernikahan Adi dan Yuli");

    return url.toString();
  }, []);

  const openInvitation = () => {
    setIsOpen(true);
    setPlay(true);
    setHideMusic(false);
  };

  return (
    <AssetsLoader assets={{ ...assets, ...photos }}>
      <main
        className={classNames(
          sofiaSans.className,
          {
            "pt-5": !isOpen,
          },
          "max-w-[460px] mx-auto h-full overflow-auto bg-black transition-all duration-[2s]",
        )}
      >
        <div className="h-full relative">
          <div
            className={classNames(
              {
                "rounded-t-[50px]": !isOpen,
              },
              "h-full relative bg-[#354279] p-[10px] transition-all duration-[2s]",
            )}
          >
            <div
              className={classNames(
                {
                  "rounded-t-[42px]": !isOpen,
                },
                "relative h-full overflow-hidden transition-all duration-[2s]",
              )}
              style={{
                backgroundImage: `url(${assets.asset3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={photos.photo1}
                className={classNames(
                  {
                    [css.animate_photo]: isOpen,
                  },
                  "absolute w-full h-full object-cover opacity-30",
                )}
              />
              <div
                className={classNames(
                  "animate__animated",
                  {
                    animate__fadeOutUp: isOpen,
                  },
                  css.gradient1,
                  "absolute w-full top-0 px-8 py-8 flex items-center justify-between",
                )}
              >
                <div
                  className={classNames(
                    solenoidalFont.className,
                    "text-[96px] leading-none tracking-[-8px] relative",
                  )}
                >
                  <span className="text-[#354279]">A</span>
                  <span className="text-[#A58D48]/60 absolute left-1/2 -translate-x-1/2">
                    &
                  </span>
                  <span className="text-[#354279]">Y</span>
                </div>
                <div
                  className={classNames(
                    solenoidalFont.className,
                    "leading-none flex flex-col text-center text-[#354279]",
                  )}
                >
                  <span className="text-[48px]">25</span>
                  <span className="text-[28px] my-[-6px]">Des</span>
                  <span className="text-[48px]">25</span>
                </div>
              </div>

              {isOpen && (
                <div className="absolute w-full top-1/2 -translate-y-1/2">
                  <div
                    className={classNames(
                      "animate__animated animate__delay-1s",
                      {
                        animate__fadeInUp: isOpen,
                      },
                    )}
                  >
                    <p
                      className={classNames(
                        solenoidalFont.className,
                        "text-xl text-center leading-relaxed px-4 text-[#22294A]",
                      )}
                    >
                      Sebab pada awal dunia, Allah menjadikan mereka laki-laki
                      dan perempuan, sebab itu laki-laki akan meninggalkan
                      ayahnya dan ibunya dan bersatu dengan istrinya, sehingga
                      keduanya itu menjadi satu daging. <br />
                      Demikianlah mereka bukan lagi dua, melainkan satu. Karena
                      itu, apa yang telah dipersatukan Allah, tidak boleh
                      diceraikan manusia.
                      <br />
                      <br />
                      Markus 10:6-9
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={classNames(
              "animate__animated",
              {
                animate__fadeOutDown: isOpen,
              },
              "absolute bottom-0 w-full h-1/2 rounded-tr-[calc(100%-80px)]",
            )}
            style={{
              backgroundImage: `url(${assets.asset1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 w-full h-[240px]">
              <div className="absolute w-full bottom-0">
                <img
                  src={assets.asset2}
                  className="absolute bottom-[20px] right-[20px] w-[140px]"
                />

                <div
                  className="absolute bottom-[66px] w-full h-[50px] bg-[#22294A] border-y-8 box-content border-[#22294A]"
                  style={{
                    backgroundImage: `url(${assets.asset9})`,
                    backgroundRepeat: "repeat",
                  }}
                />

                <button
                  className={classNames(
                    css.button,
                    "absolute right-[50px] bottom-[40px] text-center leading-none font-bold text-[#22294A]",
                  )}
                  onClick={openInvitation}
                >
                  Buka <br />
                  Undangan
                </button>
              </div>

              <div className="absolute left-[20px] bottom-[160px]">
                <p className="text-[#fff]">Kepada yth</p>
                <p className="text-[#fff] italic mb-4">Bapak/Ibu/Saudara/i</p>
                <p
                  className={classNames(
                    solenoidalFont.className,
                    "text-[#DAC178] text-xl",
                  )}
                >
                  {guestName}
                </p>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div>
            <div className="pt-12 pb-24 overflow-hidden" style={bgImage1Style}>
              <Fade>
                <p className="px-8 text-center text-[#fff] leading-loose mb-8">
                  Dengan ungkapan puji syukur atas anugerah dan cinta kasih
                  Allah yang Maha Kuasa, mengundang Bapak/Ibu/Saudara/i dalam
                  acara Resepsi Pernikahan putra-putri kami tercinta:
                </p>
              </Fade>

              <Fade>
                <div className="relative mx-4 px-4 py-8 rounded-tl-[50px] rounded-br-[50px] bg-[#FFFFFF]/15">
                  <div
                    className={classNames(
                      css.gradient2,
                      "absolute size-[300px] rounded-[50%] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-60",
                    )}
                  />
                  <img
                    src={photos.photo2}
                    className="absolute w-[120px] rounded-tl-[60px] right-0 top-0 translate-y-[-40px]"
                  />

                  <img
                    src={assets.asset4}
                    className="absolute w-[230px] right-[-16px] bottom-[-80px]"
                  />

                  <div className="relative inline-block mb-12">
                    <p
                      className={classNames(
                        solenoidalFont.className,
                        "text-[#DAC178] text-xl",
                      )}
                    >
                      Adi Putra Wijaya
                    </p>
                    <p
                      className={classNames(
                        hirarkiSignatureFont.className,
                        "absolute bottom-0 right-0 translate-y-full text-[#DAC178] text-2xl",
                      )}
                    >
                      Adi
                    </p>
                  </div>

                  <div className="relative text-[#fff]">
                    <p className="text-sm mb-4">
                      Putra dari Bapak Andi Gunawan & <br />
                      Ibu Aulia Rahmawati
                    </p>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b py-1 text-sm inline-flex gap-1 items-center"
                    >
                      <TbBrandInstagram className="text-lg" />
                      <span>@adi_putra</span>
                    </a>
                  </div>
                </div>
              </Fade>

              <Fade>
                <p
                  className={classNames(
                    solenoidalFont.className,
                    "text-center my-24 text-[#fff] text-2xl",
                  )}
                >
                  Dengan
                </p>
              </Fade>

              <Fade>
                <div className="relative mx-4 px-4 py-8 rounded-tr-[50px] rounded-br-[50px] bg-[#FFFFFF]/15">
                  <div
                    className={classNames(
                      css.gradient2,
                      "absolute size-[300px] rounded-[50%] right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-60",
                    )}
                  />
                  <img
                    src={photos.photo3}
                    className="absolute w-[120px] rounded-tr-[60px] left-0 top-0 translate-y-[-40px]"
                  />

                  <img
                    src={assets.asset4}
                    className="absolute w-[230px] left-[-16px] bottom-[-80px] scale-x-[-1]"
                  />

                  <div className="relative text-right mb-12">
                    <p
                      className={classNames(
                        solenoidalFont.className,
                        "text-[#DAC178] text-xl",
                      )}
                    >
                      Yuliana Dewi Maharani
                    </p>
                    <p
                      className={classNames(
                        hirarkiSignatureFont.className,
                        "absolute bottom-0 right-0 translate-y-full text-[#DAC178] text-2xl",
                      )}
                    >
                      Yuli
                    </p>
                  </div>

                  <div className="relative text-[#fff] text-right">
                    <p className="text-sm mb-4">
                      Putri dari Bapak Yanto Wibowo & <br />
                      Ibu Cahya Pratiwi
                    </p>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b py-1 text-sm inline-flex gap-1 items-center"
                    >
                      <TbBrandInstagram className="text-lg" />
                      <span>@yuli_cantik</span>
                    </a>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="relative pt-12 pb-28 px-4" style={bgImage2Style}>
              <div className="absolute bottom-0 left-0 w-full translate-y-[60px]">
                <Fade>
                  <img src={assets.asset5} className="w-[240px] mx-auto" />
                </Fade>
              </div>

              <Fade>
                <p className="text-center text-[#22294A] mb-8">
                  Yang akan dilaksanakan pada:
                </p>
              </Fade>

              <Fade>
                <div>
                  <p
                    className={classNames(
                      solenoidalFont.className,
                      "text-center text-[#22294A] text-2xl mb-2",
                    )}
                  >
                    Resepsi
                  </p>

                  <div className="p-4" style={bgImage1Style}>
                    <div className="border border-[#DAC178] px-4 pt-6 pb-4">
                      <div className="flex flex-col gap-6 text-[#fff] mb-6">
                        <div className="flex gap-2">
                          <TbCalendarEvent className="text-xl mt-1 shrink-0" />
                          <span className="text-lg">
                            Sabtu, 25 Desember 2025
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <TbClock className="text-xl mt-1 shrink-0" />
                          <span className="text-lg">Pukul 11.00-13.00 WIB</span>
                        </div>
                        <div className="flex gap-2">
                          <TbWindow className="text-xl mt-1 shrink-0" />
                          <span className="text-lg">
                            Ballroom Hotel Tentrem <br /> Yogyakarta
                          </span>
                        </div>
                      </div>

                      <div className="text-center">
                        <a
                          href="https://maps.app.goo.gl/ytzj1NuM7QJdUZWKA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center inline-flex items-center gap-2 bg-[#DAC178] px-4 py-1 rounded"
                        >
                          <TbMap2 className="text-xl" />
                          <span>Lihat Maps</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade>
                <div className="py-8 flex gap-4 justify-between items-center">
                  <Countdown
                    date={new Date("2025-12-12")} // YYYY-MM-DD
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="flex flex-col items-center bg-[#22294A]/20 px-2 py-4 rounded-tl-[20px] rounded-br-[10px]">
                          <span className="text-2xl text-[#DAC178] font-light">
                            {days}
                          </span>
                          <span className="text-sm text-[#fff]">Hari</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#22294A]/20 px-2 py-4 rounded-tr-[20px] rounded-bl-[10px]">
                          <span className="text-2xl text-[#DAC178] font-light">
                            {hours}
                          </span>
                          <span className="text-sm text-[#fff]">Jam</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#22294A]/20 px-2 py-4 rounded-bl-[20px] rounded-tr-[10px]">
                          <span className="text-2xl text-[#DAC178] font-light">
                            {minutes}
                          </span>
                          <span className="text-sm text-[#fff]">Menit</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#22294A]/20 px-2 py-4 rounded-br-[20px] rounded-tl-[10px]">
                          <span className="text-2xl text-[#DAC178] font-light">
                            {seconds}
                          </span>
                          <span className="text-sm text-[#fff]">Detik</span>
                        </div>
                      </div>
                    )}
                  />

                  <a
                    href={calendarURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-1 rounded border border-[#354279] text-[#354279]"
                  >
                    <TbCalendarPlus className="text-xl" />
                    <span>Simpan ke Calendar</span>
                  </a>
                </div>
              </Fade>

              <Fade>
                <div>
                  <p
                    className={classNames(
                      solenoidalFont.className,
                      "text-center text-[#22294A] text-2xl mb-2",
                    )}
                  >
                    Sakramen Perkawinan
                  </p>

                  <div className="p-4" style={bgImage1Style}>
                    <div className="border border-[#DAC178] px-4 pt-6 pb-4">
                      <div className="flex flex-col gap-6 text-[#fff]">
                        <div className="flex gap-2">
                          <TbCalendarEvent className="text-xl mt-1 shrink-0" />
                          <span className="text-lg">
                            Jumat, 24 Desember 2025
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <TbBuildingChurch className="text-xl mt-1 shrink-0" />
                          <span className="text-lg">
                            Gereja Katolik Santo Petrus & Paulus Minomartani
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="py-12" style={bgImage1Style}>
              <div className="text-center text-[#fff] mt-12">
                <Fade>
                  <p className="leading-loose px-4 mb-8">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami, <br />
                    apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan
                    doa restu kepada kedua mempelai
                  </p>
                </Fade>

                <Fade>
                  <p className="font-bold italic mb-2">Kami yang berbahagia:</p>

                  <p className="mb-2">
                    Putra dari Bapak Andi Gunawan & <br />
                    Ibu Aulia Rahmawati
                  </p>
                  <p className="mb-8">
                    Putri dari Bapak Yanto Wibowo & <br />
                    Ibu Cahya Pratiwi
                  </p>
                </Fade>

                <Fade>
                  <div
                    className={classNames(
                      solenoidalFont.className,
                      "flex items-center justify-center gap-1 text-3xl text-[#DAC178]",
                    )}
                  >
                    <span>Adi</span>
                    <span>&</span>
                    <span className="ml-[-4px]">Yuli</span>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        )}
      </main>
      <Particles size={2} sizeMin={1} color="#DAC178" />
      <Music
        musicURL="/assets/musics/sweet-moments.wav"
        play={play}
        setPlay={setPlay}
        hide={hideMusic}
      />
    </AssetsLoader>
  );
}
