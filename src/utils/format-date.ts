import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export default function formatDate(
	date: Date | string,
	format = "DD MMMM YYYY",
) {
	return dayjs(date).format(format);
}
