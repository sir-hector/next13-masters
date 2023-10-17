import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductCount, getProductsList } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { SortByPrice } from "@/ui/organisms/SortByPrice";
import { SortByRating } from "@/ui/organisms/SortByRating";

// export const generateStaticParams = async () => {
// 	return [];
// };

export default async function CategoryProductPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sortByRating: string; sortByPrice: string };
}) {
	const numberOfProducts = await getProductCount();
	const PRODUCT_PER_PAGE = 3;
	const numberOfPages = Math.ceil(
		numberOfProducts / PRODUCT_PER_PAGE,
	);
	const offset = PRODUCT_PER_PAGE * (parseInt(params.pageNumber) - 1);
	const { sortByPrice, sortByRating } = searchParams;

	const products = (await getProductsList(
		PRODUCT_PER_PAGE,
		offset,
		sortByPrice
			? { price: "asc" }
			: sortByRating
			? { averageRating: "asc" }
			: undefined,
	)) as ProductListItemFragment[];

	return (
		<div>
			<h1>Produkty strona: {params.pageNumber}</h1>
			<div className="flex flex-row gap-4">
				<SortByPrice />
				<SortByRating />
			</div>
			<ProductList products={products} />
			<Pagination href={"/products"} numberOfPages={numberOfPages} />
		</div>
	);
}
