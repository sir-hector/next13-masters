import { executeGraphql } from "./graphqlApi";
import { CategoryGetListDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql(
		CategoryGetListDocument,
		{},
	);

	return graphqlResponse.categories;
};
