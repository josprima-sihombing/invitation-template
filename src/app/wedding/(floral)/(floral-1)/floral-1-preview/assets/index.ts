import bg from "./bg.jpg";
import a from "./a.png";

export const image = {
	bg: bg.src,
	a: a.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
