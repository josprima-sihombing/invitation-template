"use client";

import AssetsLoader from "@/components/assets-loader";
import { assets } from "./assets";
import { photos } from "./photos";

import css from "./style.module.scss";
import classNames from "classnames";
import { sofiaSans, solenoidalFont } from "@/fonts";
import getName from "@/utils/get-name";

export default function Page() {
  const guestName = getName();

  return (
    <AssetsLoader assets={{ ...assets, ...photos }}>
      <main
        className={classNames(
          sofiaSans.className,
          "max-w-[460px] mx-auto h-full overflow-auto bg-black",
        )}
      >
        <div className="h-full relative">
          <div className="h-full relative bg-[#354279] p-[10px] rounded-[50px]">
            <div
              className="relative h-full rounded-[42px] overflow-hidden"
              style={{
                backgroundImage: `url(${assets.asset3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={photos.photo1}
                className="absolute w-full h-full object-cover opacity-30"
              />
              <div
                className={classNames(
                  css.gradient1,
                  "relative px-8 py-8 flex items-center justify-between",
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
            </div>
          </div>
          <div
            className="absolute bottom-0 w-full h-1/2 rounded-tr-[calc(100%-80px)]"
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
      </main>
    </AssetsLoader>
  );
}
