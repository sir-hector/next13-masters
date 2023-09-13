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

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(productResposeItemToProductItemType);

	return products;
};

export const getProductById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	const product = productResposeItemToProductItemType(productResponse);

	return product;
};

const productResposeItemToProductItemType = (product: ProductResponseItem): ProductItemType => ({
	id: product.id,
	price: product.price,
	name: product.title,
	category: product.category,
	coverImage: {
		src: product.image,
		alt: product.title,
	},
});
