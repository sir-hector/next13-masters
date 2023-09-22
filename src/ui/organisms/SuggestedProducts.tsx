import { getProductsListByCategorySlug } from "@/app/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

export const SuggestedProducts = async ({
	category,
}: {
	category: string;
}) => {
	console.log(category);
	const products = (await getProductsListByCategorySlug(
		category,
		4,
		0,
	)) as ProductListItemFragment[];

	return (
		<ProductList
			products={products.slice(-4)}
			data-testid="related-products"
		/>
	);
};
