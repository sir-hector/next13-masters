import Link from "next/link";

export default function Page() {
	return (
		<div>
			<Link href="/test2" className="hover:underline">
				TEST2
			</Link>
		</div>
	);
}
