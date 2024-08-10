"use client";

import classNames from "classnames";
import { images } from "./assets";
import { fontsVariable } from "./fonts";
import EnvelopeIcon from "@/components/icons/envelope";
import { useEffect, useRef, useState } from "react";
import type { Config } from "./configs";
import RsvpForm from "@/components/rsvp-form";
import { FaCopy } from "react-icons/fa6";

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
    <div
      className={classNames(
        "max-w-xl h-full mx-auto font-primary",
        fontsVariable,
      )}
    >
      <div className="relative h-full overflow-hidden">
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
          data-animation-name="fadeIn slideDown"
        />

        <img
          src={images.image4}
          alt=""
          className="absolute right-4 -top-3 w-[80px]"
          data-animation-name="fadeIn slideDown"
          data-animation-delay="0.2"
          data-animation-after="swing,infinite,2"
        />

        <img
          src={images.image5}
          alt=""
          className="absolute left-4 -top-5 w-[80px]"
          data-animation-name="fadeIn slideDown"
          data-animation-delay="0.5"
          data-animation-after="swing,infinite,2"
        />
        <div className="text-center pt-[80px] relative h-full flex flex-col gap-14">
          <p
            className="text-3xl font-special"
            style={{
              color: colors.two,
            }}
            data-animation-name="fadeIn slideDown"
            data-animation-delay="0.2"
          >
            Undangan
          </p>

          <div className="py-2 px-8">
            <p
              className="font-heading text-lg"
              style={{ color: colors.one }}
              data-animation-name="fadeIn slideDown"
              data-animation-delay="0.2"
            >
              Khitanan
            </p>
            <p
              className="font-decorative text-3xl"
              style={{ color: colors.two }}
              data-animation-name="fadeIn slideDown"
              data-animation-delay="0.2"
            >
              Arsakha Virendra Pradipta
            </p>
            <p
              className="font-decorative text-lg my-6"
              style={{ color: colors.one }}
              data-animation-name="fadeIn slideDown"
              data-animation-delay="0.2"
            >
              dan
            </p>
            <p
              className="font-heading text-lg"
              style={{ color: colors.one }}
              data-animation-name="fadeIn slideDown"
              data-animation-delay="0.2"
            >
              Aqiqah
            </p>
            <p
              className="font-decorative text-3xl"
              style={{ color: colors.two }}
              data-animation-name="fadeIn slideDown"
              data-animation-delay="0.2"
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
          data-animation-name="fadeIn slideUp"
          data-animation-delay="1"
        >
          <img
            src={images.image2}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 h-full -translate-x-1/2"
            data-animation-name="fadeIn slideUp"
            data-animation-delay="1"
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
          <div className="relative overflow-hidden">
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
              src={images.image7}
              className="absolute bottom-0 translate-y-24 left-0 w-full"
            />
            <img
              src={images.image8}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px]"
            />
            <img
              src={images.image6}
              className="absolute left-0 bottom-0 w-full max-h-[100px]"
            />

            <div className="relative pt-[60px] pb-[420px] px-8 text-center">
              <p style={{ color: colors.two }} className="pb-8">
                Assalamualaikum Wr. Wb.
              </p>
              <p style={{ color: colors.two }} className="pb-8">
                Dengan memohon rahmat & ridha Allah SWT. Kami bermaksud
                menyelenggarakan acara Khitan dan acara Aqiqah, putra dan putri
                kami :
              </p>
              <p
                className="font-heading text-2xl"
                style={{ color: colors.one }}
              >
                Khitanan
              </p>
              <p
                className="font-decorative text-3xl"
                style={{ color: colors.two }}
              >
                Arsakha Virendra Pradipta
              </p>
            </div>
          </div>

          <div className="relative h-full overflow-hidden">
            <div
              className="absolute w-full h-full top-0 left-0"
              style={{
                backgroundImage: `radial-gradient(${colors.six}, ${colors.seven})`,
              }}
            >
              <div
                className="absolute w-full h-full top-0 left-0 opacity-30"
                style={{
                  backgroundImage: `url(${images.image9})`,
                  backgroundSize: "5%",
                  backgroundRepeat: "repeat",
                }}
              />
            </div>

            <img
              src={images.image10}
              className="absolute top-0 left-0 w-full max-h-[100px]"
            />

            <img
              src={images.image14}
              className="absolute left-1/2 bottom-0 translate-y-[80px] -translate-x-1/2 w-[600px] max-w-[unset]"
            />

            <img
              src={images.image11}
              className="absolute left-1/2 -translate-x-1/2 ml-8 bottom-0 w-[240px]"
            />

            <img
              src={images.image6}
              className="absolute left-0 bottom-0 w-full max-h-[100px]"
            />

            <div className="relative">
              <p>Aqiqah</p>
              <p>Arsy Rahajeng Bintang Rayeswari</p>
            </div>
          </div>

          <div className="relative overflow-x-hidden">
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
              />
            </div>

            <div className="relative p-4">
              <p>Yang InsyaAllah akan dilaksanakan :</p>

              <div className="p-4 rounded-3xl bg-red-500">
                <div className="p-4 rounded-3xl bg-green-500">
                  <p>Acara Masak-Masak</p>
                  <p>Rabu, 11 September 2024</p>
                  <p>Mulai pukul 08.30 WIB s/d selesai</p>
                  <p>Hiburan Orgen Tunggal "Rudi Music"</p>
                </div>

                <div className="p-4 rounded-3xl bg-green-500">
                  <p>Acara Persedekahan/Resepsi</p>
                  <p>Kamis, 12 September 2024</p>
                  <p>Mulai pukul 09.00 WIB s/d selesai</p>
                  <p>Hiburan OM. Sumber Harta Music</p>
                </div>

                <p>
                  Alamat:
                  <br />
                  Dusun II Km.9 Bamasco Kec. Tuah Negeri
                </p>
              </div>

              <p>
                Menjadi sebuah Kesan yang mendalam akan terukir di hati kami,
                serta diiringi ucapan doa dan terima kasih yang tulus, apabila
                Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
                kepada putra kami.
              </p>
            </div>
          </div>

          <div className="relative">
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
              />
            </div>

            <div className="relative">
              <RsvpForm />
            </div>
          </div>

          <div className="relative">
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
              />
            </div>

            <div className="relative py-10 px-4">
              <div className="py-10 px-4">
                <p>Amplop Digital</p>
                <p>
                  Doa Restu Anda merupakan karunia yang sangat berarti bagi
                  kami. Namun jika memberi adalah ungkapan tanda kasih Anda,
                  Anda dapat memberi kado secara cashless.
                </p>

                <div className="p-4 bg-red-500">
                  <img
                    src={images.image15}
                    className="p-2 bg-red-200 w-[65px] rounded-md"
                  />

                  <p>567801008101535</p>
                  <p>a/n: Yeti Elita Sari</p>
                </div>

                <button className="flex gap-2 items-center">
                  <FaCopy />
                  <span>Salin No.Rekening</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
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
              />
            </div>

            <img src={images.image13} className="absolute" />
            <img src={images.image13} className="absolute" />

            <div className="relative py-10 px-4">
              <div className="relative py-10 px-4">
                <img src={images.image12} className="absolute" />
                <p>
                  Atas kehadiran serta do'a restunya kami haturkan terima kasih.
                </p>
                <p>Wassalamualaikum Wr. Wb.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
