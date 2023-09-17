import Link from "next/link";
import { getProductsList } from "../api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductPage() {
	const products = await getProductsList(5,0);

	return (
		<section className="mx-auto p-12">
			<ProductList products={products} />
			<Link href={'/products/1'}>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pokaz więcej</button>
			</Link>
		</section>
	);
}
