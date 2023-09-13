import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	await wait(5000);

	return <ProductList products={products.slice(-4)} />;
};
