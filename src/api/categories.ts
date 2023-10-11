import { executeGraphql } from "./graphqlApi";
import { CategoryGetListDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CategoryGetListDocument,
		variables: {},
	});

	return graphqlResponse.categories;
};
