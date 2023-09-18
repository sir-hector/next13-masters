import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
	ProductGetListDocument,
} from "@/gql/graphql";
import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async (
	productAmount: number,
	offset: number,
): Promise<ProductItemType[]> => {
	console.log(productAmount, offset);
	const graphqlResponse = await executeGraphql(
		ProductGetListDocument,
		{},
	);

	return graphqlResponse.products.map((p) => {
		return {
			id: p.id,
			name: p.name,
			description: p.description,
			category: p.categories[0]?.name || "Brak kategorii",
			price: p.price,
			coverImage: p.images[0] && {
				src: p.images[0].url,
				alt: p.name,
			},
		};
	});
};

export const getProductsListByCategorySlug = async (slug: string) => {
	const categories = await executeGraphql(
		ProductGetByCategorySlugDocument,
		{ slug: slug },
	);

	const products = categories.categories[0]?.products;

	if (!products) {
		throw notFound();
	}

	return products.map((p) => {
		return {
			id: p.id,
			name: p.name,
			description: p.description,
			category: p.categories[0]?.name || "Brak kategorii",
			price: p.price,
			coverImage: p.images[0] && {
				src: p.images[0].url,
				alt: p.name,
			},
		};
	});
};

export const getProductById = async (id: string) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;

	const product =
		productResposeItemToProductItemType(productResponse);

	return product;
};

const productResposeItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => ({
	id: product.id,
	price: product.price,
	name: product.title,
	category: product.category,
	coverImage: {
		src: product.image,
		alt: product.title,
	},
	description: product.description,
});
