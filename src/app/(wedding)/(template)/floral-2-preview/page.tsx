import type { Metadata } from "next";
import Component from "./component";
import DATA from "./data";

export const metadata: Metadata = {
  title: DATA.title,
};

export default function Page() {
  return <Component />;
}
