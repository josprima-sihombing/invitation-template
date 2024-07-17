import type { Metadata } from "next";
import DATA from "./data";
import Component from "./component";
import formatDate from "@/utils/format-date";

export const metadata: Metadata = {
	title: DATA.title,
	description: formatDate(DATA.isoDate),
};

export default function Page() {
	return <Component />;
}
