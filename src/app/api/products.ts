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
	const res = await fetch(
		"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmnj7rrp254t01rtdn8v9ex3/master",
		{
			method: "POST",
			body: JSON.stringify({
				query: /* GraphQL */ `
					query GetProductsList {
						products(first: ${productAmount}, skip: ${offset}) {
							id
							name
							description
							price
							images {
								url
							}
						}
					}
				`,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	type TResult = {
		products: {
			id: string;
			name: string;
			description: string;
			images: {
				url: string;
			}[];
			price: number;
		};
	};

	const graphqlResponse =
		(await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(graphqlResponse.errors[0].message);
	}

	// return graphqlResponse.data.products;

	return graphqlResponse.data.products.map((p) => {
		return {
			id: p.id,
			name: p.name,
			description: p.description,
			category: p.category,
			price: p.price,
			coverImage: {
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
