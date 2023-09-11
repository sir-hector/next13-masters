import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";

export default function Page() {
	return (
		<div>
			<ProductCounter />
			<Link href="/test2" className="hover:underline" prefetch={true}>
				TEST2
			</Link>
		</div>
	);
}
