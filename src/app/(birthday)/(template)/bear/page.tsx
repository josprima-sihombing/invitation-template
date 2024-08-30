import { Lemon, Inter } from "next/font/google";
import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import { Button } from "@mantine/core";

const lemon = Lemon({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div
      className={classNames(
        "max-w-screen-md mx-auto h-full relative",
        css.cover,
        lemon.className,
      )}
    >
      <div className="absolute w-full top-1/2 -translate-y-1/2 text-center">
        <h1 className="text-center text-white text-lg mb-12">
          You are invited!
        </h1>

        <div className="mb-12 relative">
          <div className="w-[260px] h-[290px] overflow-hidden rounded-[50%] mx-auto">
            <img
              src={images.image1}
              className="w-full h-full block object-cover"
            />
          </div>

          <img
            src={images.image2}
            className={classNames(css.center, "w-[380px]")}
          />
        </div>

        <Button className={classNames(inter.className)}>OPEN INVITATION</Button>
      </div>
    </div>
  );
}
