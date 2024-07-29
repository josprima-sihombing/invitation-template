import Section from "@/components/section";
import { image } from "./assets";

import css from "./style.module.css";
import { hirarkiSignatureFont, solenoidalFont } from "@/fonts";
import { FaEnvelope } from "react-icons/fa6";

export default function Component() {
	return (
		<>
			<Section>
				<div
					className={css.cover}
					style={{
						backgroundImage: `url(${image.bg})`,
					}}
				>
					<div className={css.frame}>
						<div className={css.left} />
						<div className={css.right} />
						<div className={css.bottom} />
						<div className={css.top} />

						<div className={css.frame_name}>
							<img src={image.a} />
							<h1 className={solenoidalFont.className}>H&F</h1>
							<h2 className={solenoidalFont.className}>24.01.26</h2>
						</div>

						<div className={css.frame_floral}>
							<img src={image.b} />
							<img src={image.c} />
							<img src={image.c} />
						</div>
					</div>

					<div className={css.content}>
						<h1 className={solenoidalFont.className}>THE WEDDING OF</h1>
						<h2 className={hirarkiSignatureFont.className}>Hendra</h2>
						<h3 className={hirarkiSignatureFont.className}>and</h3>
						<h2 className={hirarkiSignatureFont.className}>Fitri</h2>
						<h4 className={solenoidalFont.className}>Kepada Yth.</h4>
						<h5 className={solenoidalFont.className}>Tamu Undangan</h5>
						<button type="button" className={solenoidalFont.className}>
							<FaEnvelope />
							<span>Buka Undangan</span>
						</button>
					</div>
				</div>
			</Section>
		</>
	);
}
