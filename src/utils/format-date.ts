import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export default function formatDate(
	date: Date | string,
	format = "DD MMMM YYYY",
) {
	return dayjs(date).format(format);
}
