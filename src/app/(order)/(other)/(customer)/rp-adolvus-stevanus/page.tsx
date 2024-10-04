"use client";

import classNames from "classnames";
import css from "./style.module.scss";
import { images } from "./assets";
import { useEffect, useRef, useState } from "react";
import getName from "@/utils/get-name";
import RsvpForm from "@/components/rsvp-form";
import Countdown3 from "@/components/countdown/countdown-3";
import { FaBuilding, FaCalendarDay, FaClock, FaCross } from "react-icons/fa6";
import { playfair, sofiaSans } from "@/fonts";
import Ads from "@/components/ads";
import InvitationLayout from "@/components/invitation-layout";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);
  const invitationContentRef = useRef<HTMLDivElement>(null);
  const guestName = getName();

  const openInvitation = () => {
    setIsOpen(true);
    setPlay(true);
    setHideMusic(false);
  };

  useEffect(() => {
    if (isOpen) {
      invitationContentRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <InvitationLayout
      coverChildren={<img src={images.imageLogo} className="w-[80px]" />}
      images={images}
      hideMusic={hideMusic}
      play={play}
      setPlay={setPlay}
      musicURL="/assets/musics/amazing-grace-129645.mp3"
    >
      <div className={classNames(sofiaSans.className, "h-full")}>
        <div className="relative h-full bg-[#E8E4D1]">
          <div
            className="absolute left-0 top-0 w-full h-full opacity-60"
            style={{
              backgroundImage: `url(${images.imageBg})`,
              backgroundSize: "100px",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="relative h-full flex flex-col">
            <div className="text-center px-8 py-10 flex-grow flex flex-col items-center justify-center">
              <img src={images.imageLogo} className="w-[80px] mx-auto mb-4" />
              <h1 className="text-lg tracking-[8px]">UNDANGAN</h1>
              <h1 className="font-black text-xl text-[#2F318B]">
                Tahbisan Imamat, Misa Perdana dan Misa Syukur
              </h1>
            </div>

            <div className="flex-grow">
              <div className="relative">
                <img src={images.imageFoto} className="max-w-[180px] mx-auto" />
                <h1 className="absolute bottom-[30px] w-full text-center text-[#4755A8] font-black text-lg">
                  RP. ADOLVUS STEVANUS, SVD
                </h1>
              </div>
            </div>

            <div
              className={classNames(
                css.card,
                "relative flex flex-col items-center justify-center py-10 bg-[#172158]",
              )}
            >
              <div
                className="absolute w-full h-full opacity-10"
                style={{
                  backgroundImage: `url(${images.imagePattern})`,
                  backgroundSize: "50px",
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative text-center">
                <h1 className="text-white">Kepada Yth.</h1>
                <h1 className="mb-4 text-white font-bold">{guestName}</h1>
                <button onClick={openInvitation} className={css.button}>
                  Buka Undangan
                </button>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div ref={invitationContentRef}>
            <div
              className="px-8 py-32 text-center text-[#fff]"
              style={{
                backgroundImage: `url(${images.imageBg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="leading-loose">
                Puji Syukur Pada Tuhan karena kasih-Nya anak/adik kami yang
                telah ditahbiskan menjadi Imam
              </h1>

              <p
                className={classNames(
                  playfair.className,
                  "text-xl font-black mt-4 text-[#f3c847]",
                )}
              >
                P, ADOLVUS STEVANUS, SVD
              </p>
              <p className="mb-10 font-bold text-[#f3c847]">
                Putra dari Bpk. Aurelius Nesa dan Ibu Yofita Geta
              </p>
              <p>yang telah ditahbiskan menjadi imam oleh</p>
              <p className={classNames(playfair.className, "font-black")}>
                Mgr. Yustinus Harjsusanto, MSF
              </p>
            </div>
            <div
              className="px-8 py-32"
              style={{
                backgroundImage: `url(${images.imageBg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="leading-loose mb-10 text-center">
                Dengan hormat dan penuh rasa syukur kami mengundang
                Bapak,Ibu,Saudara/i untuk menghadiri perayaan Misa Syukur dan
                dilanjutkan Resepsi Tahbisan Imam yang akan dilaksanakan pada:
              </p>

              <h1
                className={classNames(
                  playfair.className,
                  "text-xl text-center tracking-[6px] text-[#2F318B] mb-4",
                )}
              >
                MISA SYUKUR
              </h1>

              <div className="bg-[#2F318B] text-[#fff] p-2 text-sm">
                <div className="flex flex-col gap-4 border-2 border-[#fff] p-4">
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaCalendarDay />
                    </span>
                    <span>Kamis, 17 Oktober 2024</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaClock />
                    </span>
                    <span>Pukul 09:00 WITA</span>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <span className="mt-1 text-sm">
                      <FaBuilding />
                    </span>
                    <span>
                      Di Jln. Pisang No.1
                      <br />
                      RT/RW 007/003 Desa Suka Maju,
                      <br /> SP 5 Wahau
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Countdown3
                  date={new Date("2024-10-17")}
                  bgColor="#2F318B"
                  textColor="#fff"
                  borderColor="#fff"
                />
              </div>
            </div>

            <div
              className="px-8 py-32"
              style={{
                backgroundImage: `url(${images.imageBg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1
                className={classNames(
                  playfair.className,
                  "text-xl text-center tracking-[2px] text-[#fff] mb-4",
                )}
              >
                TAHBISAN IMAMAT
              </h1>

              <div className="bg-[#2F318B] text-[#fff] p-2 text-sm mb-8">
                <div className="flex flex-col gap-4 border-2 border-[#fff] p-4">
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaCalendarDay />
                    </span>
                    <span>Rabu, 09 Oktober 2024</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaBuilding />
                    </span>
                    <span>Selabing, SP 5 - Wahau</span>
                  </div>
                </div>
              </div>

              <h1
                className={classNames(
                  playfair.className,
                  "text-xl text-center tracking-[2px] text-[#fff] mb-4",
                )}
              >
                MISA PERDANA
              </h1>

              <div className="bg-[#2F318B] text-[#fff] p-2 text-sm mb-10">
                <div className="flex flex-col gap-4 border-2 border-[#fff] p-4">
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaCalendarDay />
                    </span>
                    <span>Minggu, 13 Oktober 2024</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1 text-sm">
                      <FaBuilding />
                    </span>
                    <span>Selabing, SP 5 - Wahau</span>
                  </div>
                </div>
              </div>

              <p className="text-center leading-loose text-[#fff]">
                Kehadiran dan doa Bapak/Ibu/Saudara/i merupakan suatu kebanggaan
                dan kebahagiaan untuk keluarga kami
              </p>
              <p className="text-center mt-4 text-[#fff]">
                Terimakasih atas doa dan kehadiran kita semua
              </p>
            </div>

            <div
              className="px-4 py-12"
              style={{
                backgroundImage: `url(${images.imageBg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white px-4 py-8 shadow-md rounded-md border border-[#e0e0e0]">
                <RsvpForm
                  language="id"
                  afterSubmit={() => {
                    document.getElementById("closing")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                />
              </div>
            </div>

            <div
              className="px-8 py-10 text-white"
              id="closing"
              style={{
                backgroundImage: `url(${images.imageBg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-center text-lg font-black mb-10">
                Hormat Kami
              </h1>
              <p
                className={classNames(
                  playfair.className,
                  "text-center font-black italic mb-2",
                )}
              >
                Yang Mengundang:
              </p>

              <ol className="list-decimal mb-10">
                <li>
                  Bpk Aurelius Nesa / Ibu Yofita Geta{" "}
                  <FaCross className="inline text-xs" />
                </li>
                <li>Bpk Simon Sera</li>
                <li>Bpk Fransiskus KS Dari/istri</li>
                <li>Bpk Muhamad Sarifudin</li>
                <li>Bpk Vicktorianus Neta/istri</li>
                <li>Bpk Gregorius Nggoro/istri</li>
                <li>Bpk Richardus Poto/istri</li>
              </ol>

              <p
                className={classNames(
                  playfair.className,
                  "text-center font-black italic mb-2",
                )}
              >
                Turut Mengundang:
              </p>

              <ol className="list-decimal">
                <li>Bpk Fernandes Pae/istri</li>
                <li>Bpk Yakob Abubakar/istri</li>
                <li>Bpk Mohamad Usman/istri</li>
                <li>Bpk Malkoing Palang</li>
                <li>Bpk Herman Huvat/istri</li>
                <li>Bpk Bernabas Dan/istri</li>
                <li>Bpk Muklas/istri</li>
                <li>Bpk Paulus Pota/istri</li>
                <li>Bpk Petrus Padi/istri</li>
                <li>Bpk Hendrikus Wawo/istri</li>
                <li>Bpk Awaludin/istri</li>
                <li>Bpk Fadelis Na'u/istri</li>
                <li>Bpk Benyamin/istri</li>
                <li>Bpk Yohakim Desitus/istri</li>
                <li>Bpk Yohanes Bernad a'a</li>
                <li>Bpk Hasan Haji</li>
                <li>Bpk Damran/istri</li>
              </ol>
            </div>

            <Ads />
          </div>
        )}
      </div>
    </InvitationLayout>
  );
}
