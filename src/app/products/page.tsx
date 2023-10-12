import Link from "next/link";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";

export default async function ProductPage() {
	const products = (await getProductsList(
		3,
		0,
	)) as ProductListItemFragment[];
	await new Promise((_, reject) => setTimeout(reject, 1000));
	return (
		<section className="mx-auto p-12">
			<ProductList products={products} />
			<div className="mt-5 flex justify-center">
				<Link href={"/products/1"}>
					<button className="border-2 border-white p-3 font-bold text-white hover:bg-white hover:text-black">
						Pokaz więcej
					</button>
				</Link>
			</div>
		</section>
	);
}
