import css from "./gallery.module.css";

type GalleryProps = {
	imageUrls: string[];
	id?: string;
};

export default function Gallery({ imageUrls, id }: GalleryProps) {
	return (
		<div className={css.gallery} id={id}>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[0]} loading="lazy" />
				</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[1]} loading="lazy" />
				</div>
			</div>
			<div>
				<div className={css.image_landscape}>
					<img src={imageUrls[2]} loading="lazy" />
				</div>
			</div>
			<div>
				<div className={css.image_landscape}>
					<img src={imageUrls[3]} loading="lazy" />
				</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[4]} loading="lazy" />
				</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[5]} loading="lazy" />
				</div>
			</div>
		</div>
	);
}
