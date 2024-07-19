import person from "./person.jpeg";
import a from "./a.png";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";
import f from "./f.png";

export const image = {
	person: person.src,
	a: a.src,
	b: b.src,
	c: c.src,
	d: d.src,
	e: e.src,
	f: f.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
