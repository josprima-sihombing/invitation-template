import Countdown from "react-countdown";
import { solenoidalFont } from "@/fonts";

import css from "./countdown-1.module.css";

type Countdown1Props = {
	date: string | number | Date | undefined;
};

export default function Countdown1({ date }: Countdown1Props) {
	return (
		<Countdown
			date={date}
			renderer={({ days, hours, minutes, seconds }) => (
				<div className={css.countdown}>
					<div>
						<span className={solenoidalFont.className}>{days}</span>
						<span className={solenoidalFont.className}>Days</span>
					</div>
					<div>
						<span className={solenoidalFont.className}>{hours}</span>
						<span className={solenoidalFont.className}>Hours</span>
					</div>
					<div>
						<span className={solenoidalFont.className}>{minutes}</span>
						<span className={solenoidalFont.className}>Minutes</span>
					</div>
					<div>
						<span className={solenoidalFont.className}>{seconds}</span>
						<span className={solenoidalFont.className}>Seconds</span>
					</div>
				</div>
			)}
		/>
	);
}
