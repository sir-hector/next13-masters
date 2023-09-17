import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/app/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList(5, 0);
	return products.map((product) => product.id);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `Sigle Product Page`,
		description: product.description,
	};
};

export default async function SigleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<h1>Sigle Product Page</h1>
				<ProductListItem product={product} />
				<p>{product.description}</p>
			</article>
			<aside>
				<Suspense>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
