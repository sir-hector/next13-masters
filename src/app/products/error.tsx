"use client";
export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest: string };
	reset: () => void;
}) {
	return (
		<div>
			<div>ERROR {error.digest}</div>
		</div>
	);
}
