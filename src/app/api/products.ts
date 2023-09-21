import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	ProductCountByCategoryDocument,
	ProductCountDocument,
	ProductGetByCategorySlugDocument,
	ProductGetByIdDocument,
	ProductGetListDocument,
	ProductsGetListByNameDocument,
	type ProductListItemFragment,
} from "@/gql/graphql";

export const getProductsList = async (
	productAmount: number,
	offset: number,
) => {
	const graphqlResponse = await executeGraphql(
		ProductGetListDocument,
		{ number: productAmount, offset },
	);
	return graphqlResponse.products;
};

export const getProductCount = async () => {
	const graphqlResponse = await executeGraphql(
		ProductCountDocument,
		{},
	);
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductCountByCategory = async (
	category: string,
): Promise<number> => {
	const graphqlResponse = await executeGraphql(
		ProductCountByCategoryDocument,
		{ category },
	);
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsListByCategorySlug = async (
	slug: string,
	productAmount: number,
	offset: number,
) => {
	const graphqlResponse = await executeGraphql(
		ProductGetByCategorySlugDocument,
		{ slug: slug, number: productAmount, offset },
	);

	const products = graphqlResponse.categories[0]?.products;

	if (!products) {
		throw notFound();
	}

	return products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
) => {
	const graphqlResponse = await executeGraphql(
		ProductGetByIdDocument,
		{
			id: id,
		},
	);

	if (!graphqlResponse.product) {
		throw notFound();
	}

	return graphqlResponse.product;
};

export const getProductsByName = async (name?: string) => {
	if (!name) {
		throw notFound();
	}

	const graphqlResponse = await executeGraphql(
		ProductsGetListByNameDocument,
		{ name: name },
	);

	if (!graphqlResponse.products) {
		throw notFound();
	}

	return graphqlResponse.products;
};
