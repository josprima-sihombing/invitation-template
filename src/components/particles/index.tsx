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
  size?: number;
  sizeMin?: number;
};

export default function Particles({
  color = "#A67C52",
  opacity = 1,
  size = 4,
  sizeMin = 2,
}: ParticlesProps) {
  config.particles.color.value = color;
  config.particles.opacity.value = opacity;
  config.particles.size.value = size;
  config.particles.size.anim.size_min = sizeMin;

  useEffect(() => {
    window.particlesJS("particles-js", config);
  }, []);

  return <div id="particles-js" className={css.particles}></div>;
}
