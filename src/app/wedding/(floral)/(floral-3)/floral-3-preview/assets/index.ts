import groom from "./groom.jpg";
import a from "./a.jpg";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";
import f from "./f.png";
import g from "./g.png";
import h from "./h.png";

export const image = {
	groom: groom.src,
	a: a.src,
	b: b.src,
	c: c.src,
	d: d.src,
	e: e.src,
	f: f.src,
	g: g.src,
	h: h.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
