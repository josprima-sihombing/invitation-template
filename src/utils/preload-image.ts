export default function preloadImage(url: string) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = resolve;
		image.onerror = reject;
		image.src = url;
	});
}
