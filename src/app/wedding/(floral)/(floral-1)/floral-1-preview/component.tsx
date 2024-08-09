"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useCallback, useEffect, useState } from "react";

import preloadImage from "@/utils/preload-image";

import Section from "@/components/section";
import { image, images } from "./assets";
import DATA from "./data";
import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";
import Countdown from "react-countdown";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Ads from "@/components/ads";
import RsvpForm from "@/components/rsvp-form";
import Music from "@/components/music";
import formatDate from "@/utils/format-date";
import getName from "@/utils/get-name";
import Countdown1 from "@/components/countdown/countdown-1";

export default function Component() {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(false);
  const [hideMusic, setHideMusic] = useState(true);
  const guestName = getName();

  const loadAssets = useCallback(async () => {
    await Promise.all(images.map((imageUrl) => preloadImage(imageUrl)));

    setLoading(false);
  }, []);

  const openInvitation = () => {
    document.body.style.overflow = "auto";
    setPlay(true);
    setHideMusic(false);

    document.getElementById("page1")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    loadAssets();
  }, [loadAssets]);

  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    <>
      <Section>
        <div
          className={css.cover}
          style={{
            backgroundImage: `url(${image.bg})`,
          }}
        >
          <h1 className={hirarkiSignatureFont.className}>The Wedding</h1>

          <div className={css.name_container}>
            <div className={css.name}>
              <img src={image.a} alt="" />
              <span className={solenoidalFont.className}>&</span>
              <h1 className={hirarkiSignatureFont.className}>
                {DATA.firstPerson.name[0]}
              </h1>
              <h2 className={hirarkiSignatureFont.className}>
                {DATA.secondPerson.name[0]}
              </h2>
            </div>
          </div>

          <h2 className={solenoidalFont.className}>
            {formatDate(DATA.isoDate, "MMMM Do YYYY")}
          </h2>
          <button
            type="button"
            className={solenoidalFont.className}
            onClick={openInvitation}
          >
            Open Invitation
          </button>
        </div>
      </Section>

      <Section id="page1">
        <div className={css.page1}>
          <img src={image.b} alt="" className={css.image1} />
          <img src={image.c} alt="" className={css.image2} />

          <h1 className={hirarkiSignatureFont.className}>
            {guestName ? `Dear ${guestName},` : "Hello,"}
            <br />
            You are invited to our wedding
          </h1>

          <div className={css.name}>
            <h2 className={solenoidalFont.className}>
              {DATA.firstPerson.name}
            </h2>
            <h3 className={solenoidalFont.className}>and</h3>
            <h2 className={solenoidalFont.className}>
              {DATA.secondPerson.name}
            </h2>
          </div>

          <Countdown1 date={DATA.isoDate} />
        </div>
      </Section>

      <Section>
        <div
          className={css.page2}
          style={{
            backgroundImage: `url(${image.bg})`,
          }}
        >
          {DATA.events.map((event) => (
            <div key={event.name} className={css.event}>
              <h1 className={hirarkiSignatureFont.className}>{event.name}</h1>
              <h2 className={solenoidalFont.className}>
                {formatDate(event.date, "MMMM Do YYYY")}
              </h2>
              <h3
                className={solenoidalFont.className}
                dangerouslySetInnerHTML={{ __html: event.detail }}
              />

              <a href="#" className={solenoidalFont.className}>
                Map Location
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          ))}

          <h4 className={hirarkiSignatureFont.className}>
            We hope to share this special day with you. Your presence would mean
            the world to us.
          </h4>
        </div>
      </Section>

      <Section fullHeight={false}>
        <div className={css.page3}>
          <RsvpForm />
        </div>
      </Section>

      <Section>
        <div
          className={css.page4}
          style={{
            backgroundImage: `url(${image.bg})`,
          }}
        >
          <div>
            <h1 className={hirarkiSignatureFont.className}>
              Thank you for being a part of our special day.
            </h1>
            <h2 className={hirarkiSignatureFont.className}>with love</h2>
            <h3 className={solenoidalFont.className}>
              {DATA.firstPerson.name} and {DATA.secondPerson.name}
            </h3>
          </div>
        </div>
      </Section>
      <Ads />

      <Music
        musicURL="/assets/musics/birthday-2.wav"
        play={play}
        setPlay={setPlay}
        hide={hideMusic}
      />
    </>
  );
}
