import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByCategorySlug } from "@/app/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";

export const generateStaticParams = async () => {
	return [];
};

export default async function CategoryProductPage({
	params,
}: {
	params: { categories: string; pageNumber: string };
}) {
	console.log(params);
	// const numberOfProducts = 15;
	// const currentPage = parseInt(params.pageNumber);
	const numberOfPages = 5;
	// const offset = numberOfProducts * (currentPage -1);
	const products = (await getProductsListByCategorySlug(
		"t-shirts",
	)) as ProductListItemFragment[];

	return (
		<div>
			<h1>
				Produkty strona: {params.pageNumber} {params.categories}
			</h1>
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</div>
	);
}
