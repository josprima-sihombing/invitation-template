"use client";

import Spinner from "@/components/spinner";
import { useState } from "react";

export default function Page() {
	const [loading, setLoading] = useState(false);

	// TODO: load all asset (image, sound) before render the page

	if (loading) {
		return <Spinner />;
	}

	return <div></div>;
}
