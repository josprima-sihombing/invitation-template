"use client";

import FullScreenLoading from "@/components/fullscreen-loading";
import { useState } from "react";

export default function Component() {
	const [loading, setLoading] = useState(true);

	if (loading) {
		return <FullScreenLoading />;
	}

	return <div></div>;
}
