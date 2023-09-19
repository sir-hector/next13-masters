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
	params: { categories: string };
}) {
	const numberOfPages = 5;
	const products = (await getProductsListByCategorySlug(
		params.categories,
	)) as ProductListItemFragment[];

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="color-white text-lg">Produkty </h1>
			<h1>Kategoria {params.categories}</h1>
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</div>
	);
}
