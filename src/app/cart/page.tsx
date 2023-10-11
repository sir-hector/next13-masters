import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveCartItem } from "./RemoveCartItem";
import Stripe from "stripe";
import { cookies } from "next/headers";

export default async function Page() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	async function handlePaymentAction() {
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

	return (
		<div className="mt-10">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>{item.product.name}</td>
									<td>
										<IncrementProductQuantity
											quantity={item.quantity}
											itemId={item.id}
										/>
									</td>
									<td>{item.product.price}</td>
									<td>
										<RemoveCartItem itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
			<form action={handlePaymentAction}>
				<button
					type="submit"
					className="mt-4 w-full rounded-sm border bg-slate-950 py-2 text-white shadow-sm"
				>
					Pay
				</button>
			</form>
		</div>
	);
}
