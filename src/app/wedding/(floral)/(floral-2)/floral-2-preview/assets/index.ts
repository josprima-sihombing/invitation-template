import bg from "./bg.jpg";
import personA from "./person_a.jpg";
import personB from "./person_b.jpg";
import a from "./a.svg";
import b from "./b.png";
import c from "./c.png";
import d from "./d.jpg";
import e from "./e.png";
import f from "./f.png";
import g from "./g.png";

export const image = {
	bg: bg.src,
	personA: personA.src,
	personB: personB.src,
	a: a.src,
	b: b.src,
	c: c.src,
	d: d.src,
	e: e.src,
	f: f.src,
	g: g.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
