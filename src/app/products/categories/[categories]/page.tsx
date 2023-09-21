import Link from "next/link";
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
	const products = (await getProductsListByCategorySlug(
		params.categories,
		3,
		0,
	)) as ProductListItemFragment[];

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="color-white text-lg">Produkty </h1>
			<h1>Kategoria {params.categories}</h1>
			<ProductList products={products} />
			<Link href={`/products/categories/${params.categories}/1`}>
				<button className="border-2 border-white p-3 font-bold text-white hover:bg-white hover:text-black">
					Pokaz więcej
				</button>
			</Link>
		</div>
	);
}
