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
	ProductGetByCollectionSlugDocument,
} from "@/gql/graphql";

export const getProductsList = async (
	productAmount: number,
	offset: number,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetListDocument,
		variables: { number: productAmount, offset },
		next: {
			revalidate: 150,
		},
	});
	return graphqlResponse.products;
};

export const getProductCount = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductCountDocument,
		variables: {},
	});
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductCountByCategory = async (
	category: string,
): Promise<number> => {
	const graphqlResponse = await executeGraphql({
		query: ProductCountByCategoryDocument,
		variables: { category },
	});
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsListByCategorySlug = async (
	slug: string,
	productAmount: number,
	offset: number,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByCategorySlugDocument,
		variables: { slug: slug, number: productAmount, offset },
	});

	const products = graphqlResponse.categories[0]?.products;

	if (!products) {
		throw notFound();
	}

	return products;
};

export const getProductsListByCollectionSlug = async (
	slug: string,
	productAmount: number,
	offset: number,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByCollectionSlugDocument,
		variables: { slug: slug, number: productAmount, offset },
	});

	const products = graphqlResponse.collections[0]?.products;

	if (!products) {
		throw notFound();
	}

	return products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: id,
		},
		next: {
			revalidate: 1,
		},
	});

	if (!graphqlResponse.product) {
		throw notFound();
	}

	return graphqlResponse.product;
};

export const getProductsByName = async (name?: string) => {
	if (!name) {
		throw notFound();
	}

	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByNameDocument,
		variables: { name: name },
	});

	if (!graphqlResponse.products) {
		throw notFound();
	}

	return graphqlResponse.products;
};
