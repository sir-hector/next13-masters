import { getProductsByName } from "../api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";

export default async function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const query = searchParams["query"];

	const products = (await getProductsByName(
		query,
	)) as ProductListItemFragment[];

	return (
		<div>
			<h1>Search Page</h1>
			<br />
			<ProductList products={products} />
		</div>
	);
}
