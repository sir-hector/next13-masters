import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductCount, getProductsList } from "@/app/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";

export const generateStaticParams = async () => {
	return [];
};

export default async function CategoryProductPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const numberOfProducts = await getProductCount();
	const PRODUCT_PER_PAGE = 3;
	const numberOfPages = Math.ceil(
		numberOfProducts / PRODUCT_PER_PAGE,
	);
	const offset = PRODUCT_PER_PAGE * (parseInt(params.pageNumber) - 1);

	const products = (await getProductsList(
		PRODUCT_PER_PAGE,
		offset,
	)) as ProductListItemFragment[];

	return (
		<div>
			<h1>Produkty strona: {params.pageNumber}</h1>
			<ProductList products={products} />
			<Pagination href={"/products"} numberOfPages={numberOfPages} />
		</div>
	);
}
