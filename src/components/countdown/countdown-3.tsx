import Countdown from "react-countdown";

import css from "./countdown-3.module.css";

type Countdown1Props = {
  date: string | number | Date | undefined;
};

export default function Countdown3({ date }: Countdown1Props) {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className={css.countdown}>
          <div>
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div>
            <span>{hours}</span>
            <span>Hours</span>
          </div>
          <div>
            <span>{minutes}</span>
            <span>Minutes</span>
          </div>
          <div>
            <span>{seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      )}
    />
  );
}
