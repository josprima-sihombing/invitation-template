import formatDate from "@/utils/format-date";
import type { Metadata } from "next";
import Component from "./component";
import DATA from "./data";

export const metadata: Metadata = {
	title: DATA.title,
	description: formatDate(DATA.isoDate),
};

export default function Page() {
	return <Component />;
}
