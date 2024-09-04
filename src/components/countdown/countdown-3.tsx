import Countdown from "react-countdown";

import css from "./countdown-3.module.css";

type Countdown1Props = {
  date: string | number | Date | undefined;
  bgColor?: string;
  textColor?: string;
};

export default function Countdown3({
  date,
  bgColor,
  textColor,
}: Countdown1Props) {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className={css.countdown}>
          <div
            style={{
              color: textColor,
              backgroundColor: bgColor,
            }}
          >
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div
            style={{
              color: textColor,
              backgroundColor: bgColor,
            }}
          >
            <span>{hours}</span>
            <span>Hours</span>
          </div>
          <div
            style={{
              color: textColor,
              backgroundColor: bgColor,
            }}
          >
            <span>{minutes}</span>
            <span>Minutes</span>
          </div>
          <div
            style={{
              color: textColor,
              backgroundColor: bgColor,
            }}
          >
            <span>{seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      )}
    />
  );
}
