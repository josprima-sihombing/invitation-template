import groom from "./groom.jpg";
import personA from "./person_a.jpg";
import personB from "./person_b.jpg";
import a from "./a.jpg";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";
import f from "./f.png";
import g from "./g.png";
import h from "./h.png";
import i from "./i.png";
import j from "./j.png";
import k from "./k.png";
import l from "./l.svg";

export const image = {
	groom: groom.src,
	personA: personA.src,
	personB: personB.src,
	a: a.src,
	b: b.src,
	c: c.src,
	d: d.src,
	e: e.src,
	f: f.src,
	g: g.src,
	h: h.src,
	i: i.src,
	j: j.src,
	k: k.src,
	l: l.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
