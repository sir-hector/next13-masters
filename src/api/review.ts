import { ReviewCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export async function addReview(
	productId: string,
	content: string,
	email: string,
	headline: String,
	name: String,
	rating: number,
) {
	return executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId: productId,
			content,
			email,
			name,
			headline,
			rating,
		},
		cache: "no-store",
	});
}
