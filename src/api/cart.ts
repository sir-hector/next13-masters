import { cookies } from "next/headers";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartSetProductQuntityDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export async function getOrCreateCart() {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart.createOrder) {
		throw new Error("failed to create cart");
	}

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return cart.createOrder;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return;
	}

	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});

	if (!cart.order) {
		return;
	}
	return cart.order;
}

export function createCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {},
		cache: "no-store",
	});
}

export async function addProductToCart(
	id: string,
	productId: string,
) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
		cache: "no-store",
	});

	if (!product) {
		throw new Error("Product not found");
	}

	const existingCart = await getCartFromCookies();
	const alreadyInCart = existingCart?.orderItems.find(
		(orderItem) => orderItem.product?.id === productId,
	);
	console.log(alreadyInCart);
	if (alreadyInCart) {
		await executeGraphql({
			query: CartSetProductQuntityDocument,
			variables: {
				itemId: alreadyInCart?.id,
				quantity: alreadyInCart.quantity + 1,
			},
		});
	} else {
		await executeGraphql({
			query: CartAddProductDocument,
			variables: {
				orderId: id,
				productId: productId,
				total: product.price,
			},
			cache: "no-store",
		});
	}
}
