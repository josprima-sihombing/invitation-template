import "@/libs/particles";
import { useEffect } from "react";
import config from "./config.json";

import css from "./particles.module.css";

declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

type ParticlesProps = {
  color?: string;
  opacity?: number;
};

export default function Particles({
  color = "#A67C52",
  opacity = 1,
}: ParticlesProps) {
  config.particles.color.value = color;
  config.particles.opacity.value = opacity;

  useEffect(() => {
    window.particlesJS("particles-js", config);
  }, []);

  return <div id="particles-js" className={css.particles}></div>;
}
