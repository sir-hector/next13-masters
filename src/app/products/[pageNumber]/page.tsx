import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductCount, getProductsList } from "@/api/products";
import {
	ProductOrderByInput,
	type ProductListItemFragment,
} from "@/gql/graphql";
import { SotrProducts } from "@/ui/organisms/SortByRating";

// export const generateStaticParams = async () => {
// 	return [];
// };

export default async function CategoryProductPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { product_list_order: string };
}) {
	const numberOfProducts = await getProductCount();
	const PRODUCT_PER_PAGE = 3;
	const numberOfPages = Math.ceil(
		numberOfProducts / PRODUCT_PER_PAGE,
	);
	const offset = PRODUCT_PER_PAGE * (parseInt(params.pageNumber) - 1);
	const { product_list_order } = searchParams;

	const orderBy = (product_list_order ||
		"name_ASC") as ProductOrderByInput;

	const products = (await getProductsList(
		PRODUCT_PER_PAGE,
		offset,
		orderBy,
	)) as ProductListItemFragment[];

	return (
		<div>
			<h1>Produkty strona: {params.pageNumber}</h1>
			<div className="flex flex-row gap-4">
				<SotrProducts defaultOrderBy={orderBy} />
			</div>
			<ProductList products={products} />
			<Pagination href={"/products"} numberOfPages={numberOfPages} />
		</div>
	);
}
