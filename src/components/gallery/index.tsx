import css from "./gallery.module.css";

type GalleryProps = {
	imageUrls: string[];
};

export default function Gallery({ imageUrls }: GalleryProps) {
	return (
		<div className={css.gallery}>
			<div>
				<div className={css.video}>1</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[0]} />
				</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[1]} />
				</div>
			</div>
			<div>
				<div className={css.image_landscape}>
					<img src={imageUrls[2]} />
				</div>
			</div>
			<div>
				<div className={css.image_landscape}>
					<img src={imageUrls[3]} />
				</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[4]} />
				</div>
			</div>
			<div>
				<div className={css.image_portrait}>
					<img src={imageUrls[5]} />
				</div>
			</div>
		</div>
	);
}
