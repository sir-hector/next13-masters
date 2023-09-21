import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/app/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { type ProductColor, type ProductSize } from "@/gql/graphql";
import { ProductColorVariantSelect } from "@/ui/molecules/ProductColorVariantSelect";
import { ProductSizeVariantSelect } from "@/ui/molecules/ProductSizeVariantSelect";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList(5, 0);
// 	return products.map((product) => product.id);
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `Product: ${product.name}`,
		description: product.description,
	};
};

export default async function SigleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	const colorVariants: ProductColor[] = [
		...new Set<ProductColor>(
			product.variants.map((variant) => variant.color),
		),
	];

	const sizeVariants: ProductSize[] = [
		...new Set<ProductSize>(
			product.variants.map((variant) => variant.size),
		),
	];

	return (
		<>
			<h1>Product : {product.name}</h1>
			<article className="w-full">
				<div className="flex flex-row">
					<div>
						<img src={product?.images[0]?.url} />
					</div>
					<div>
						<div>
							<h3 className="text-lg font-semibold">
								{product.name}
							</h3>
							{product.categories[0] && (
								<p className="text-sm text-gray-500">
									{product.categories[0].name}
								</p>
							)}
							<p>{product?.description}</p>
						</div>
						{/* PRODUCT VARRIANTS */}
						<div className="flex gap-2">
							<ProductColorVariantSelect variants={colorVariants} />
							<ProductSizeVariantSelect variants={sizeVariants} />
						</div>
						<div className="flex justify-between">
							<p className="text-lg font-semibold">
								{product.price}zł
							</p>
						</div>
					</div>
				</div>
			</article>
			<aside>
				<Suspense>
					<SuggestedProducts
						category={product.categories[0]?.slug ?? ""}
					/>
				</Suspense>
			</aside>
		</>
	);
}
