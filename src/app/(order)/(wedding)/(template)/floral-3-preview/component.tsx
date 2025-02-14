"use client";

import Section from "@/components/section";
import { image, images } from "./assets";
import dynamic from "next/dynamic";

import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import Music from "@/components/music";
import getName from "@/utils/get-name";
import FullScreenLoading from "@/components/fullscreen-loading";
import preloadImage from "@/utils/preload-image";
import DATA from "./data";
import Countdown2 from "@/components/countdown/countdown-2";
import RsvpForm from "@/components/rsvp-form";
import Ads from "@/components/ads";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnvelopeIcon from "@/components/icons/envelope";
import Gallery from "@/components/gallery";
import { galleryImages } from "./galleries";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const guestName = getName();

  const openInvitation = () => {
    document.body.style.overflow = "auto";
    setPlay(true);
    setHideMusic(false);

    document.getElementById("page1")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const loadAssets = useCallback(async () => {
    await Promise.all(images.map((imageUrl) => preloadImage(imageUrl)));

    setLoading(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    loadAssets();
  }, [loadAssets]);

  useGSAP(
    () => {
      if (!containerRef) {
        return;
      }

      const timeline = gsap.timeline();

      timeline.from("#img_a", {
        scale: 1.5,
        duration: 5,
        repeat: -1,
        yoyo: true,
      });

      timeline.from(
        "#img_b",
        {
          y: "+=600",
          scale: 0,
          duration: 3,
        },
        0.5,
      );

      timeline.from(
        "#groom",
        {
          y: "+=600",
          scale: 0,
          duration: 3,
        },
        1.5,
      );

      timeline.from(
        "#img_c",
        {
          y: "+=600",
          scale: 0,
          duration: 3,
          rotate: 120,
        },
        1.5,
      );

      timeline.from(
        "#img_d",
        {
          y: "+=600",
          scale: 0,
          duration: 3,
          rotate: 90,
        },
        2,
      );
      timeline.from(
        "#img_e",
        {
          y: "+=600",
          rotate: 180,
          scale: 0,
          duration: 3,
        },
        2.5,
      );

      timeline.from(
        "#img_f",
        {
          y: "+=600",
          scale: 0,
          duration: 3,
        },
        3,
      );

      timeline.from(
        "#overlay",
        {
          scaleX: 0,
          duration: 2,
        },
        5,
      );

      timeline.from(
        "#img_g",
        {
          scale: 2,
          opacity: 0,
          duration: 2,
        },
        5,
      );

      timeline
        .from(
          "#img_h",
          {
            x: "-=100%",
            opacity: 0,
            duration: 2,
          },
          6,
        )
        .to("#img_h", {
          rotate: "+=10deg",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });

      timeline.from(
        "#name",
        {
          y: "-=100%",
          opacity: 0,
          duration: 2,
        },
        8,
      );

      timeline.from(
        "#button",
        {
          x: "+=100%",
          opacity: 0,
          duration: 2,
        },
        8,
      );

      timeline.to(
        "#groom",
        {
          opacity: 0.3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "none",
        },
        4,
      );

      const page1Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#page1",
          start: "top bottom-=100px",
        },
        defaults: {
          duration: 0.6,
        },
      });

      page1Timeline.from("#page1_img_a", {
        y: "100%",
      });

      page1Timeline.from(
        "#page1_overlay",
        {
          scaleX: 0,
        },
        0.5,
      );

      page1Timeline.from(
        "#page1_preface",
        {
          y: "100%",
          opacity: 0,
        },
        0.5,
      );

      page1Timeline.from(
        "#page1_img_i",
        {
          x: 100,
          scale: 0,
          rotate: 10,
        },
        1,
      );

      page1Timeline.from(
        "#page1_img_j",
        {
          x: -100,
          scale: 0,
          rotate: -10,
        },
        1.2,
      );

      gsap.from("#page2_img_f_top", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#page2_img_f_top",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#page2_img_f_bottom", {
        y: "+=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#page2_img_f_bottom",
          start: "top bottom+=100px",
        },
      });

      gsap.from("#page2_title", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#page2_title",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#person_1_img", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#person_1_img",
          start: "top bottom-=100px",
        },
      });

      gsap.from("#person_1_name", {
        x: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#person_1_name",
          start: "top bottom-=50px",
        },
      });

      gsap.from("#person_divider", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#person_divider",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#person_2_img", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#person_2_img",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#person_2_name", {
        x: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#person_2_name",
          start: "top bottom-=50px",
        },
      });

      gsap.from("#page3_title", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#page3_title",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#countdown", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#countdown",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#events>div", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        stagger: 1,
        scrollTrigger: {
          trigger: "#events>div",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#page5_title", {
        y: "-=100",
        opacity: 0,
        duration: 0.6,
        stagger: 1,
        scrollTrigger: {
          trigger: "#page5_title",
          start: "top bottom-=200px",
        },
      });

      gsap.from("#gallery>div", {
        x: "-=100",
        opacity: 0,
        duration: 0.6,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#gallery>div",
          start: "top bottom-=10px",
        },
      });
    },
    {
      dependencies: [containerRef],
    },
  );

  const onRefChange = useCallback((node: HTMLElement | null) => {
    setContainerRef(node);
  }, []);

  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    <div ref={onRefChange} style={{ height: "100%" }}>
      <Section bgColor="#FFEFDD">
        <div className={css.cover}>
          <img
            id="img_a"
            src={image.a}
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <img
            id="img_b"
            src={image.b}
            style={{
              width: "600px",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <div className={css.groom} id="groom">
            <img src={image.groom} />
          </div>

          <img
            src={image.c}
            id="img_c"
            style={{
              width: "230px",
              top: "calc(50%)",
              left: "calc(50% - 100px)",
              transform: "translateX(-50%)",
            }}
          />

          <img
            src={image.d}
            id="img_d"
            style={{
              width: "200px",
              top: "calc(50%)",
              right: "calc(50% - 100px)",
              transform: "translateX(50%)",
            }}
          />

          <img
            src={image.e}
            id="img_e"
            style={{
              width: "320px",
              top: "50%",
              left: "40%",
              transform: "translateX(-50%)",
            }}
          />

          <img
            src={image.f}
            id="img_f"
            style={{
              width: "calc(100% + 100px)",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <div className={css.overlay} id="overlay"></div>

          <img
            src={image.g}
            id="img_g"
            style={{
              width: "calc(100% + 150px)",
              bottom: "-30px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <img
            src={image.h}
            id="img_h"
            style={{
              width: "250px",
              bottom: "-30px",
              transformOrigin: "bottom center",
              left: "-80px",
              zIndex: 1,
            }}
          />

          <div
            className={css.button_container}
            style={{ zIndex: 2 }}
            id="button"
          >
            <button type="button" onClick={openInvitation}>
              <EnvelopeIcon />
              <span className={solenoidalFont.className}>Buka Undangan</span>
            </button>
          </div>

          <div className={css.name_container} id="name">
            <h1 className={solenoidalFont.className}>H&F</h1>
            <h2 className={solenoidalFont.className}>24.01.2026</h2>
          </div>
        </div>
      </Section>

      <Section id="page1" bgColor="#FFEFDD">
        <div className={css.page1}>
          <img
            id="page1_img_a"
            src={image.a}
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <div id="page1_overlay" className={css.overlay}></div>

          <div id="page1_preface" className={css.gradient_border}>
            <img
              id="page1_img_i"
              src={image.i}
              className={css.border_decoration_left}
            />
            <img
              id="page1_img_j"
              src={image.j}
              className={css.border_decoration_right}
            />
            <div className={css.preface}>
              <p className={solenoidalFont.className}>
                Tanpa mengurangi rasa hormat, kami bermaksud mengundang
                bapak/ibu/saudara/i untuk hadir pada acara pernikahan kami
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section fullHeight={false} id="page2">
        <div className={css.page2}>
          <img
            id="page2_img_f_top"
            src={image.f}
            className={css.top_decoration}
          />
          <img
            id="page2_img_f_bottom"
            src={image.f}
            className={css.bottom_decoration}
          />

          <div className={css.page2_content}>
            <h1 className={solenoidalFont.className} id="page2_title">
              Kami yang berbahagia:
            </h1>

            <div className={css.person}>
              <div className={css.person_image} id="person_1_img">
                <img src={image.k} className={css.person_image_border} />
                <img src={image.personA} className={css.person_image_groom} />
              </div>

              <h2 className={hirarkiSignatureFont.className} id="person_1_name">
                Hendra Kusuma
              </h2>
            </div>

            <div className={css.person_divider} id="person_divider">
              <img src={image.l} className={css.divider_left} />
              <img src={image.l} className={css.divider_right} />
              <h3 className={hirarkiSignatureFont.className}>dengan</h3>
            </div>

            <div className={css.person}>
              <div className={css.person_image} id="person_2_img">
                <img src={image.k} className={css.person_image_border} />
                <img src={image.personB} className={css.person_image_groom} />
              </div>

              <h2 className={hirarkiSignatureFont.className} id="person_2_name">
                Fitri
              </h2>
            </div>
          </div>
        </div>
      </Section>

      <Section fullHeight={false}>
        <div className={css.page3}>
          <h1 className={hirarkiSignatureFont.className} id="page3_title">
            Acara
          </h1>

          <div className={css.countdown} id="countdown">
            <Countdown2 date={DATA.isoDate} />
          </div>

          <div className={css.events} id="events">
            <div className={css.event_decoration}>
              <img src={image.i} className={css.event_decoration_left} />
              <img src={image.j} className={css.event_decoration_right} />

              <div className={css.event}>
                <h2 className={hirarkiSignatureFont.className}>Akad Nikah</h2>
                <h3 className={solenoidalFont.className}>24 Januari 2024</h3>
                <h4 className={solenoidalFont.className}>
                  mulai pukul 10.00 pagi
                </h4>
                <h5 className={solenoidalFont.className}>
                  di Hotel Mulia Indonesia
                </h5>

                <div className={css.event_action}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <span>
                      <span className={solenoidalFont.className}>
                        Detail Map
                      </span>

                      <FaUpRightFromSquare />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className={css.event_decoration}>
              <img src={image.i} className={css.event_decoration_left} />
              <img src={image.j} className={css.event_decoration_right} />

              <div className={css.event}>
                <h2 className={hirarkiSignatureFont.className}>Resepsi</h2>
                <h3 className={solenoidalFont.className}>24 Januari 2024</h3>
                <h4 className={solenoidalFont.className}>
                  mulai pukul 10.00 pagi
                </h4>
                <h5 className={solenoidalFont.className}>
                  di Hotel Mulia Indonesia
                </h5>

                <div className={css.event_action}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <span>
                      <span className={solenoidalFont.className}>
                        Detail Map
                      </span>

                      <FaUpRightFromSquare />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section fullHeight={false} bgColor="#FFEFDD">
        <div className={css.page4}>
          <img src={image.f} className={css.top_decoration} />
          <img src={image.f} className={css.bottom_decoration} />

          <RsvpForm />
        </div>
      </Section>

      <Section fullHeight={false} bgColor="#FFEFDD">
        <div className={css.page5}>
          <img src={image.f} className={css.bottom_decoration} />

          <h1 className={hirarkiSignatureFont.className} id="page5_title">
            Our Moments
          </h1>

          <Gallery imageUrls={galleryImages} id="gallery" />
        </div>
      </Section>

      <Section bgColor="#FFEFDD">
        <div className={css.page6}>
          <img src={image.a} className={css.page6_bg} />

          <div className={css.page6_content}>
            <h1 className={hirarkiSignatureFont.className}>
              Thank you for being <br /> a part of <br /> our special day.
            </h1>
            <h2 className={hirarkiSignatureFont.className}>with love</h2>
            <h3 className={solenoidalFont.className}>Hendra & Fitri</h3>

            <div
              style={{
                WebkitMaskImage: `url(${image.m})`,
                maskImage: `url(${image.m})`,
              }}
              className={css.image_mask}
            >
              <img src={image.groom} />
            </div>
          </div>

          <div className={css.overlay} />
        </div>
      </Section>

      <Ads />

      <Music
        musicURL="/assets/musics/sweet-moments.wav"
        play={play}
        setPlay={setPlay}
        hide={hideMusic}
      />

      <Particles color="#F0E68C" opacity={0.8} />
    </div>
  );
}
