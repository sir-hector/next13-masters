import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import {
	getProductCountByCategory,
	getProductsListByCategorySlug,
} from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { Metadata } from "next";

// export const generateStaticParams = async () => {
// 	return [];
// };

export const metadata: Metadata = {
	title: "Categories",
};

export default async function CategoryProductPage({
	params,
}: {
	params: { categories: string; pageNumber: string };
}) {
	const numberOfProducts = await getProductCountByCategory(
		params.categories,
	);
	const PRODUCT_PER_PAGE = 3;
	const numberOfPages = Math.ceil(
		numberOfProducts / PRODUCT_PER_PAGE,
	);
	const offset = PRODUCT_PER_PAGE * (parseInt(params.pageNumber) - 1);

	const products = (await getProductsListByCategorySlug(
		params.categories,
		PRODUCT_PER_PAGE,
		offset,
	)) as ProductListItemFragment[];

	return (
		<div>
			<h1>Categories</h1>
			<ProductList products={products} />
			<Pagination
				numberOfPages={numberOfPages}
				href={`/products/categories/${params.categories}`}
			/>
		</div>
	);
}
