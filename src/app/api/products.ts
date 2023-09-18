import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
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
	const categories = await executeGraphql(
		ProductGetByCategorySlugDocument,
		{ slug: slug },
	);

	const products = categories.categories[0]?.products;

	if (!products) {
		throw notFound();
	}

	return products;
};

export const getProductById = async (
	_id: ProductListItemFragment["id"],
) => {
	// @todo:  GRAPGQL

	throw new Error("Not implemented");
};
