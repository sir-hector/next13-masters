import { getProductsListByCategorySlug } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";
import { ProductListItem } from "../molecules/ProductListItem";

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
		<ul
			className="max-w flex flex-wrap justify-center gap-5"
			data-testid="related-products"
		>
			{products.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
};
