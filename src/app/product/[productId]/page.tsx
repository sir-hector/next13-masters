import { cookies } from "next/headers";
import { Suspense } from "react";
import { type Metadata } from "next";
import { AddToCartButton } from "./AddToCartButton";
import { getProductById } from "@/app/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { type ProductColor, type ProductSize } from "@/gql/graphql";
import { ProductColorVariantSelect } from "@/ui/molecules/ProductColorVariantSelect";
import { ProductSizeVariantSelect } from "@/ui/molecules/ProductSizeVariantSelect";
import { addProductToCart, getOrCreateCart } from "@/app/api/cart";

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
		title: `Product : ${product.name}`,
		description: product.description,
	};
};

export default async function SigleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	const colorSet: ProductColor[] = [
		...new Set(
			product.colorVariants
				.filter(
					(variant): variant is { color: ProductColor } =>
						"color" in variant,
				)
				.map((variant) => variant.color),
		),
		...new Set(
			product.sizeColorVariants
				.filter(
					(variant): variant is { color: ProductColor } =>
						"color" in variant,
				)
				.map((variant) => variant.color),
		),
	];

	const sizeSet: ProductSize[] = [
		...new Set(
			product.sizeVariants
				.filter(
					(variant): variant is { size: ProductSize } =>
						"size" in variant,
				)
				.map((variant) => variant.size),
		),
		...new Set(
			product.sizeColorVariants
				.filter(
					(variant): variant is { size: ProductSize } =>
						"size" in variant,
				)
				.map((variant) => variant.size),
		),
	];

	async function addToCartAction(_form: FormData) {
		"use server";
		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, params.productId);
	}

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
							<ProductColorVariantSelect variants={colorSet} />
							<ProductSizeVariantSelect variants={sizeSet} />
						</div>
						<div className="flex justify-between">
							<p className="text-lg font-semibold">
								{product.price}zł
							</p>
						</div>
						<form action={addToCartAction}>
							<input
								type="hidden"
								name="productId"
								value={product.id}
							/>
							<AddToCartButton />
						</form>
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
