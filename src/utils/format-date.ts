import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/id";

dayjs.extend(advancedFormat);
dayjs.locale();

type Locale = "en" | "id";

export default function formatDate(
  date: Date | string,
  format = "DD MMMM YYYY",
  locale: Locale = "en",
) {
  return dayjs(date).locale(locale).format(format);
}
