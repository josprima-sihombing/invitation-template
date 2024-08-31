"use client";

import { Lemon } from "next/font/google";
import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import Button from "@/components/button";
import { useState } from "react";

const lemon = Lemon({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className={classNames("h-full relative", css.cover, lemon.className)}>
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

          <div className="absolute w-[100px] h-[380px] bg-[#FBDC77] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tr-[80px] -z-10" />
          <div className="absolute w-[100px] h-[380px] bg-[#E3CFF7] right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-bl-[80px] -z-10" />
        </div>

        <Button onClick={openInvitation}>OPEN INVITATION</Button>
      </div>
    </div>
  );
}
