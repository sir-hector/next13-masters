import { SearchInput } from "@/ui/atoms/SearchInput";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCartFromCookies } from "@/api/cart";
import Link from "next/link";

export const NavigationBar = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length ?? 0;

	return (
		<nav className="flex items-center justify-between p-4">
			<div className="text-2xl font-bold">Next.js masters</div>
			<div className="flex flex-row">
				<SearchInput />
				<ul className="flex">
					<li className="mx-4">
						<ActiveLink
							href="/"
							className="hover:text-blue border-black text-white"
							activeClassName="underline border-black"
						>
							Home
						</ActiveLink>
					</li>
					<li className="mx-4">
						<ActiveLink
							href="/products"
							className="hover:text-blue border-black text-white"
							activeClassName="underline border-white"
							exact={true}
						>
							All
						</ActiveLink>
					</li>
					<li className="mx-4">
						<ActiveLink
							href="/products/categories"
							className="hover:text-blue border-black text-white"
							activeClassName="underline border-white"
							exact={false}
						>
							Categories
						</ActiveLink>
					</li>
					<li>
						<Link
							href="/cart"
							className="group -m-2 flex items-center p-2"
						>
							<ShoppingCart
								className="h-6 w-6 flex-shrink-0"
								aria-hidden="true"
							/>
							<span className="ml-2 text-sm font-medium">
								{quantity}
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
