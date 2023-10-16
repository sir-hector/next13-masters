import { getProductsList } from "@/api/products";
import { ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";
import Link from "next/link";

export default async function HomePage() {
	const products = (await getProductsList(
		4,
		0,
	)) as ProductListItemFragment[];
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
