import person from "./person.jpeg";
import a from "./a.png";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";

export const image = {
	person: person.src,
	a: a.src,
	b: b.src,
	c: c.src,
	d: d.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
