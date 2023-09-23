import { cookies } from "next/headers";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/app/api/graphqlApi";

export async function getOrCreateCart() {
	const cart = await getCartFromCookies();
	if (cart) {
		return cart;
	}
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart.order) {
			return cart.order;
		}
	}
}

export function createCart() {
	return executeGraphql(CartCreateDocument, {});
}

export async function addProductToCart(
	id: string,
	productId: string,
) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error("Product not found");
	}
	await executeGraphql(CartAddProductDocument, {
		orderId: id,
		productId: productId,
		total: product.price,
	});
}
