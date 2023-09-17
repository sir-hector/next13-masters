import { getProductsList } from "@/app/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	return []
}

export default async function CategoryProductPage({
	params,
}: {
	params: { pageNumber: string };
}) 
{
	const numberOfProducts = 15;
	const currentPage = parseInt(params.pageNumber);
	const offset = numberOfProducts * (currentPage -1);
	const products = await getProductsList(numberOfProducts, offset);

	return (
		<div>
			<h1>
				{params.pageNumber}
			</h1>
			<ProductList products={products} />
			<Pagination currentPage={currentPage} />
		</div>
	);
}