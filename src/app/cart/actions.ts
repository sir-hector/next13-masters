"use server";

import { getCartFromCookies } from "@/api/cart";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartRemoveProductDocument,
	CartSetProductQuntityDocument,
} from "@/gql/graphql";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

export async function handlePaymentAction() {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe key");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const cart = await getCartFromCookies();

	if (!cart) {
		return;
	}

	const line_items = cart.orderItems.map((item) =>
		item.product
			? {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.product.name,
							description: item.product.name,
						},
						unit_amount: item.product.price,
					},
					quantity: item.quantity,
			  }
			: null,
	);

	// TO DO - line_items does not work

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: [
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: "AAA",
						description: "desc",
					},
					unit_amount: 200,
				},
				quantity: 200,
			},
		],
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});
	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
}
