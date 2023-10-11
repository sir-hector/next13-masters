"use server";

import { executeGraphql } from "@/api/graphqlApi";
import {
	CartRemoveProductDocument,
	CartSetProductQuntityDocument,
} from "@/gql/graphql";

export const removeItem = async (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	return executeGraphql({
		query: CartSetProductQuntityDocument,
		variables: {
			itemId,
			quantity,
		},
	});
};
