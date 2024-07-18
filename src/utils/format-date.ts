import dayjs from "dayjs";

export default function formatDate(
	date: Date | string,
	format = "DD MMMM YYYY",
) {
	return dayjs(date).format(format);
}
