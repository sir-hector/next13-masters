"use client";

import { useRouter } from "next/navigation";

// TO DO - move it to components

export function Overlay() {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 z-30 bg-slate-800 bg-opacity-75"
		></div>
	);
}