import Link from "next/link";
import { getCategoriesList } from "@/api/categories";
import { redirect } from "next/navigation";

export default async function ProductPage() {
	const categories = await getCategoriesList();

	redirect("/products/categories/t-shirts/1");

	return (
		<section className="mx-auto p-12">
			<h2 className="text-center font-mono text-3xl	font-bold">
				CATEGORIES
			</h2>
			<div className="mt-2 flex flex-row justify-center gap-2">
				{categories.map((category) => (
					<div
						key={category.id}
						className="h-10 max-w-sm border p-2 hover:bg-white hover:text-black hover:shadow-md  "
					>
						<Link href={`/products/categories/${category.slug}`}>
							<p>{category.name}</p>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
