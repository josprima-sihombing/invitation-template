import bg from "./bg.jpg";
import a from "./a.png";
import b from "./b.png";
import c from "./c.png";

export const image = {
  bg: bg.src,
  a: a.src,
  b: b.src,
  c: c.src,
};

export const images = Object.keys(image).map(
  (key) => image[key as keyof typeof image],
);
