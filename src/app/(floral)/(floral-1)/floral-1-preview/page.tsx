"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useState } from "react";

export default function Page() {
	const [loading, setLoading] = useState(true);

	// TODO: load all asset (image, sound) before render the page

	if (loading) {
		return <FullScreenLoading />;
	}

	return <div></div>;
}
