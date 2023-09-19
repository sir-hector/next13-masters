import Link from "next/link";
import { getProductsList } from "../api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";

export default async function ProductPage() {
	const products = (await getProductsList(
		5,
		0,
	)) as ProductListItemFragment[];

	return (
		<section className="mx-auto p-12">
			<ProductList products={products} />
			<Link href={"/products/1"}>
				<button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
					Pokaz więcej
				</button>
			</Link>
		</section>
	);
}
