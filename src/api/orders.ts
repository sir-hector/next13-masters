import { OrdersByEmailsDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export async function getOrdersByEmail(email: string) {
	return executeGraphql({
		query: OrdersByEmailsDocument,
		variables: {
			email: email,
		},
		cache: "no-store",
	});
}
