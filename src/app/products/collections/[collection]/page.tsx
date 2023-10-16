import Link from "next/link";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByCollectionSlug } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { getCollectionBySlug } from "@/api/collecttions";
import { Metadata } from "next";

// export const generateStaticParams = async () => {
// 	return [];
// };

export async function generateMetadata({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> {
	const collection = await getCollectionBySlug(params.collection);

	return {
		title: collection?.name,
	};
}

export default async function CollectionProductPage({
	params,
}: {
	params: { collection: string };
}) {
	const products = (await getProductsListByCollectionSlug(
		params.collection,
		3,
		0,
	)) as ProductListItemFragment[];

	const collection = await getCollectionBySlug(params.collection);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1>{collection?.name}</h1>
			<ProductList products={products} />
			<Link href={`/products/collections/${params.collection}/1`}>
				<button className="border-2 border-white p-3 font-bold text-white hover:bg-white hover:text-black">
					Pokaz więcej
				</button>
			</Link>
		</div>
	);
}
