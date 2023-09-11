import Link from "next/link";

export default function Page() {
	return (
		<div>
			<Link href="/test1" className="hover:underline">
				TEST1
			</Link>
		</div>
	);
}
