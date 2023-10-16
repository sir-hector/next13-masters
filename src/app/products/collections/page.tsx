import Link from "next/link";
import { getCollectionList } from "@/api/collecttions";

export default async function ProductPage() {
	const collections = await getCollectionList();

	return (
		<section className="mx-auto p-12">
			<h2 className="text-center font-mono text-3xl	font-bold">
				Collections
			</h2>
			<div className="mt-2 flex flex-row justify-center gap-2">
				{collections.map((collection) => (
					<div
						key={collection.id}
						className="h-10 max-w-sm border p-2 hover:bg-white hover:text-black hover:shadow-md  "
					>
						<Link href={`/products/collections/${collection.slug}`}>
							<p>{collection.name}</p>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
