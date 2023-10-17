"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const SortByPrice = () => {
	const searchParams = useSearchParams();
	const isSortByPrice = Boolean(searchParams.get("sortByPrice"));
	const [sortByPrice, setSortByPrice] = useState(isSortByPrice);
	const router = useRouter();

	const handleSortByPrice = async () => {
		if (!sortByPrice) {
			router.push(`/products/1?sortByPrice=true`);
		} else {
			router.push(`/products/1`);
		}
		setSortByPrice((prev) => !prev);
	};

	return (
		<button
			data-testid="sort-by-price"
			onClick={handleSortByPrice}
			className={`w-fit cursor-pointer rounded-lg border p-2 ${
				sortByPrice ? "bg-slate-500 text-white" : "bg-white"
			}`}
		>
			Sort by price
		</button>
	);
};
