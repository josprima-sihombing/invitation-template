import type { Metadata, Viewport } from "next";
import Component from "./component";
import DATA from "./data";

export const viewport: Viewport = {
	themeColor: "#C38260",
};

export const metadata: Metadata = {
	title: DATA.title,
};

export default function Page() {
	return <Component />;
}
