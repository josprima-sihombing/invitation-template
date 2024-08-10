"use client";

import classNames from "classnames";
import { images } from "./assets";
import { fontsVariable } from "./fonts";
import EnvelopeIcon from "@/components/icons/envelope";
import { useEffect, useRef, useState } from "react";
import type { Config } from "./configs";

type ComponentProps = {
  config: Config;
};

export default function Component({ config }: ComponentProps) {
  const { colors } = config;
  const [opened, setOpened] = useState(false);
  const invitationContentRef = useRef<HTMLDivElement>(null);

  const openInvitation = () => {
    setOpened(true);
  };

  useEffect(() => {
    if (opened) {
      invitationContentRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [opened]);

  return (
    <div className={classNames("container h-full mx-auto", fontsVariable)}>
      <div className="relative h-full">
        <div
          className="absolute w-full h-full top-0 left-0"
          style={{
            backgroundImage: `radial-gradient(${colors.five}, ${colors.three})`,
          }}
        >
          <div
            className="absolute w-full h-full top-0 left-0 opacity-30"
            style={{
              backgroundImage: `url(${images.image3})`,
              backgroundSize: "5%",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <img
          src={images.image1}
          alt=""
          className="w-full absolute left-0 top-0 max-h-[120px] object-cover"
          data-animation-name="fadeIn"
        />

        <img
          src={images.image4}
          alt=""
          className="absolute right-4 top-0 w-[80px]"
        />

        <img
          src={images.image5}
          alt=""
          className="absolute left-4 top-0 w-[80px]"
        />
        <div className="text-center pt-[80px] relative h-full flex flex-col gap-14">
          <p
            className="text-3xl font-special"
            style={{
              color: colors.two,
            }}
          >
            Undangan
          </p>

          <div className="py-2 px-8">
            <p className="font-heading text-lg" style={{ color: colors.one }}>
              Khitanan
            </p>
            <p
              className="font-decorative text-3xl"
              style={{ color: colors.two }}
            >
              Arsakha Virendra Pradipta
            </p>
            <p
              className="font-decorative text-lg my-6"
              style={{ color: colors.one }}
            >
              dan
            </p>
            <p className="font-heading text-lg" style={{ color: colors.one }}>
              Aqiqah
            </p>
            <p
              className="font-decorative text-3xl"
              style={{ color: colors.two }}
            >
              Arsy Rahajeng Bintang Rayeswari
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-10 w-full border-y"
          style={{
            borderColor: colors.two,
            backgroundColor: colors.three,
          }}
        >
          <img
            src={images.image2}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 h-full -translate-x-1/2"
          />

          <div className="p-4 text-right">
            <p className="text-sm" style={{ color: colors.one }}>
              Kepada yth
            </p>
            <p className="text-sm" style={{ color: colors.one }}>
              Bapak/Ibu/Saudara/i:
            </p>
            <p
              className="font-heading text-lg my-2"
              style={{
                color: colors.two,
              }}
            >
              Tamu Undangan
            </p>

            <button
              onClick={openInvitation}
              className="px-4 py-2 rounded-md border border-solid flex ml-auto items-center gap-2"
              style={{
                color: colors.two,
                backgroundColor: colors.four,
                borderColor: colors.two,
              }}
            >
              <EnvelopeIcon color={colors.two} size={16} />
              <span className="text-sm" style={{ color: colors.two }}>
                Buka Undangan
              </span>
            </button>
          </div>
        </div>
      </div>

      {opened && (
        <div ref={invitationContentRef} className="h-full">
          <div className="relative h-full">
            <h1>Josprima</h1>
          </div>
        </div>
      )}
    </div>
  );
}
