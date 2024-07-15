import type { Metadata } from "next";
import DATA from "./data";
import Component from "./component";

export const metadata: Metadata = {
	title: DATA.title,
};

export default function Page() {
	return <Component />;
}
