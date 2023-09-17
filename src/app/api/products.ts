import {
	ProductGetListDocument,
	type TypedDocumentString,
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

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL not set");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse =
		(await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new TypeError(`GraphQL error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const getProductsList = async (
	productAmount: number,
	offset: number,
): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphql(
		ProductGetListDocument,
		{},
	);

	return graphqlResponse.products.map((p) => {
		return {
			id: p.id,
			name: p.name,
			description: p.description,
			category: p.description,
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
