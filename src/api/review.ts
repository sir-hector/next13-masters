import { ReviewCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export async function addReview(productId: string) {
	return executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId: productId,
		},
		cache: "no-store",
	});
}
