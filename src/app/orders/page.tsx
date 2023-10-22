import { getOrdersByEmail } from "@/api/orders";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <div>User does not have email</div>;
	}

	const { orders } = await getOrdersByEmail(email);

	return (
		<div>
			<h1>{user.firstName}&rsquo;s Orders</h1>

			{orders.length === 0 ? (
				<div>No orders found</div>
			) : (
				<ul>
					{orders.map(
						(order) =>
							order.id && (
								<li key={order.id}>
									<div>{order.id}</div>
								</li>
							),
					)}
				</ul>
			)}
		</div>
	);
}
