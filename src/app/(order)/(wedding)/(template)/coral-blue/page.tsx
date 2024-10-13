"use client";

import AssetsLoader from "@/components/assets-loader";
import { assets } from "./assets";
import { photos } from "./photos";

import css from "./style.module.scss";
import classNames from "classnames";
import { hirarkiSignatureFont, sofiaSans, solenoidalFont } from "@/fonts";
import getName from "@/utils/get-name";
import dynamic from "next/dynamic";
import {
  type AnimationEventHandler,
  type CSSProperties,
  useCallback,
  useEffect,
  useState,
} from "react";
import { TbBrandInstagram } from "react-icons/tb";

import "animate.css";
import Animation from "@/components/animation";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

const bgImage1Style: CSSProperties = {
  backgroundImage: `url(${assets.asset1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);

  const guestName = getName();

  const openInvitation = () => {
    setIsOpen(true);
    setPlay(true);
    setHideMusic(false);
  };

  const onAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as Element;

    target.remove();
  };

  return (
    <AssetsLoader assets={{ ...assets, ...photos }}>
      <main
        className={classNames(
          sofiaSans.className,
          "max-w-[460px] mx-auto h-full overflow-auto bg-black pt-5",
        )}
      >
        <div className="h-full relative">
          <div className="h-full relative bg-[#354279] p-[10px] rounded-t-[50px]">
            <div
              className="relative h-full rounded-t-[42px] overflow-hidden"
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
                onAnimationEnd={onAnimationEnd}
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
            onAnimationEnd={onAnimationEnd}
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
            <div className="py-12 overflow-hidden" style={bgImage1Style}>
              <Animation>
                <p className="px-8 text-center text-[#fff] leading-loose mb-8">
                  Dengan ungkapan puji syukur atas anugerah dan cinta kasih
                  Allah yang Maha Kuasa, mengundang Bapak/Ibu/Saudara/i dalam
                  acara Resepsi Pernikahan putra-putri kami tercinta:
                </p>
              </Animation>

              <Animation animationClassName="animate__fadeInRight">
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
                      rel="noreferrer"
                      className="border-b py-1 text-sm inline-flex gap-1 items-center"
                    >
                      <TbBrandInstagram className="text-lg" />
                      <span>@adi_putra</span>
                    </a>
                  </div>
                </div>
              </Animation>

              <Animation>
                <p
                  className={classNames(
                    solenoidalFont.className,
                    "text-center my-24 text-[#fff] text-2xl",
                  )}
                >
                  Dengan
                </p>
              </Animation>

              <Animation animationClassName="animate__fadeInLeft">
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
                      rel="noreferrer"
                      className="border-b py-1 text-sm inline-flex gap-1 items-center"
                    >
                      <TbBrandInstagram className="text-lg" />
                      <span>@yuli_cantik</span>
                    </a>
                  </div>
                </div>
              </Animation>
            </div>
          </div>
        )}
      </main>
      <Particles />
    </AssetsLoader>
  );
}
