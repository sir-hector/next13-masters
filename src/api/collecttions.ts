import { executeGraphql } from "./graphqlApi";
import {
	CollectionGetBySlugDocument,
	CollectionGetListDocument,
} from "@/gql/graphql";

export const getCollectionList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetListDocument,
		variables: {},
	});

	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (collection: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: collection,
		},
	});

	return graphqlResponse.collections[0];
};
