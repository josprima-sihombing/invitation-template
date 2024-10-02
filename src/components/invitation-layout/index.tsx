import { Toaster } from "react-hot-toast";
import AssetsLoader from "../assets-loader";
import Particles from "../particles";
import Music from "../music";
import type { Dispatch, SetStateAction } from "react";

type InvitationLayoutProps = {
  images: Record<string, string>;
  children: React.ReactNode;
  coverChildren: React.ReactNode;
  imageBg: string;
  play: boolean;
  hideMusic: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
  particleColor?: string;
  musicURL: string;
};

export default function InvitationLayout({
  images,
  children,
  coverChildren,
  imageBg,
  hideMusic,
  play,
  setPlay,
  particleColor = "#DAB96B",
  musicURL,
}: InvitationLayoutProps) {
  return (
    <AssetsLoader assets={images}>
      <div className="fixed top-0 left-0 h-full w-full flex">
        <div
          className="basis-0 flex flex-grow items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${imageBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {coverChildren}
        </div>
        <div className="w-full max-w-[430px]"></div>
      </div>

      <div className="relative h-full w-full max-w-[430px] ml-auto">
        {children}

        <Particles color={particleColor} size={2} sizeMin={1} />
        <Toaster />
        <Music
          musicURL={musicURL}
          play={play}
          setPlay={setPlay}
          hide={hideMusic}
        />
      </div>
    </AssetsLoader>
  );
}
