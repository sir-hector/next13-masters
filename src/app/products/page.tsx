import { getProductsList } from "../api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductPage() {
	const products = await getProductsList();

	return (
		<section className="mx-auto p-12">
			<ProductList products={products} />
		</section>
	);
}
