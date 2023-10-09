"use server";

import { executeGraphql } from "../api/graphqlApi";
import { CartSetProductQuntityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	return executeGraphql(CartSetProductQuntityDocument, {
		itemId,
		quantity,
	});
};
