import { redirect } from "next/navigation";
import { getCartFromCookies } from "../api/cart";

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
									<td>{item.quantity}</td>
									<td>{item.product.price}</td>
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
