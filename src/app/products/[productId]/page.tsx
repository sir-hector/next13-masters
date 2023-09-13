import { Suspense } from "react";
import { getProductById } from "@/app/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export default async function SigleProduct({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<h1>Sigle Product Page</h1>
				<ProductListItem product={product} />
			</article>
			<aside>
				<Suspense>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
