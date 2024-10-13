"use client";

import AssetsLoader from "@/components/assets-loader";
import { assets } from "./assets";
import { photos } from "./photos";

import css from "./style.module.scss";
import classNames from "classnames";
import { sofiaSans, solenoidalFont } from "@/fonts";
import getName from "@/utils/get-name";
import dynamic from "next/dynamic";
import { type AnimationEventHandler, useState } from "react";

import "animate.css";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

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
          "max-w-[460px] mx-auto h-full overflow-auto bg-black",
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
            <h1>Content</h1>
          </div>
        )}
      </main>
      <Particles />
    </AssetsLoader>
  );
}
