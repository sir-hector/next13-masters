import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
	ProductGetByIdDocument,
	ProductGetListDocument,
	type ProductListItemFragment,
} from "@/gql/graphql";

export const getProductsList = async (
	productAmount: number,
	offset: number,
) => {
	console.log(productAmount, offset);
	const graphqlResponse = await executeGraphql(
		ProductGetListDocument,
		{},
	);

	return graphqlResponse.products;
};

export const getProductsListByCategorySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(
		ProductGetByCategorySlugDocument,
		{ slug: slug },
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
