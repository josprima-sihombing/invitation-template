"use client";

// @ts-ignore
import CircleType from "circletype";
import { Lemon } from "next/font/google";
import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import getName from "@/utils/get-name";

const lemon = Lemon({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const guestName = getName();

  const openInvitation = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const circleType = new CircleType(document.getElementById("text"));

    circleType.dir(-1).radius(140);
  }, []);

  return (
    <div
      className={classNames(lemon.className, "h-full max-w-screen-md mx-auto")}
    >
      <div className={classNames("h-full relative z-50", css.cover)}>
        <img
          src={images.image3}
          className="w-[80px] absolute right-[30px] bottom-[30px]"
        />
        <img
          src={images.image4}
          className="w-[110px] absolute left-[30px] bottom-[30px]"
        />

        <img
          src={images.image5}
          className="w-[250px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40px]"
        />

        <div className="absolute w-full top-1/2 -translate-y-1/2 text-center">
          <h1 className="text-center text-white text-lg mb-12">
            You are invited!
          </h1>

          <div className="mb-12 relative w-fit mx-auto">
            <div className="w-[260px] h-[290px] overflow-hidden rounded-[50%] mx-auto relative">
              <img
                src={images.image1}
                className="w-full h-full block object-cover"
              />
            </div>

            <img
              src={images.image2}
              className={classNames(css.center, "w-[320px] max-w-[unset]")}
            />

            <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2">
              <h1 className="whitespace-nowrap text-white text-lg" id="text">
                YANTO 1ST BIRTHDAY
              </h1>
            </div>

            <div className="absolute w-[100px] h-[380px] bg-[#FBDC77] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tr-[80px] -z-10" />
            <div className="absolute w-[100px] h-[380px] bg-[#E3CFF7] right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-bl-[80px] -z-10" />
          </div>

          <Button onClick={openInvitation}>OPEN INVITATION</Button>
        </div>
      </div>

      <div className={classNames(css.page2, "relative pt-32 pb-48 px-8")}>
        <div className="relative z-10">
          <h1 className="text-white text-4xl mb-2">
            Hello{guestName ? ` ${guestName}` : ""}!
          </h1>
          <h2 className="text-white text-2xl mb-8">Join us to celebrate</h2>
          <h3
            className={classNames(
              css.title,
              "text-center text-5xl max-w-[220px]",
            )}
          >
            Yanto <br />
            1st <br />
            Birthday
          </h3>
        </div>

        <div className="h-[300px] w-[50px] bg-[#FBDC77] absolute right-0 top-0 translate-y-[200px] rounded-tr-[100px] rounded-bl-[100px]"></div>
        <img
          src={images.image6}
          className="w-[100px] absolute right-4 top-0 translate-y-[120px]"
        />
        <img
          src={images.image7}
          className="w-[160px] absolute bottom-[-100px] left-4"
        />
      </div>
    </div>
  );
}
