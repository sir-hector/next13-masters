import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveCartItem } from "./RemoveCartItem";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { handlePaymentAction } from "./actions";

export default async function Page() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
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
