import person from "./person.jpeg";

export const image = {
	person: person.src,
};

export const images = Object.keys(image).map(
	(key) => image[key as keyof typeof image],
);
