"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type ChangeEvent } from "react";

type SortProductsProps = {
	defaultOrderBy: string;
};

export const SotrProducts = (props: SortProductsProps) => {
	const { defaultOrderBy } = props;
	const router = useRouter();
	const searchParams = useSearchParams();
	const [orderBy, setOrderBy] = useState(
		searchParams.get("product_list_order") || defaultOrderBy,
	);

	const sortByHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;

		setOrderBy(value);
		router.push(`?product_list_order=${value}`);
	};

	return (
		<select
			data-testid="sort-products"
			name="sort"
			value={orderBy}
			onChange={sortByHandler}
		>
			{SortOrderData.map((item, index) => (
				<option
					key={index}
					value={item.value}
					data-testid={item.dataTestId}
				>
					{item.label}
				</option>
			))}
		</select>
	);
};

const SortOrderData = [
	{
		label: "Name (A to Z)",
		value: "name_ASC",
		dataTestId: "sort-by-name",
	},
	{
		label: "Name (Z to A)",
		value: "name_DESC",
		dataTestId: "sort-by-name",
	},
	{
		label: "Price (Low to High)",
		value: "price_ASC",
		dataTestId: "sort-by-price",
	},
	{
		label: "Price (High to Low)",
		value: "price_DESC",
		dataTestId: "sort-by-price",
	},
	{
		label: "Rating (Low to High)",
		value: "averageRating_ASC",
		dataTestId: "sort-by-rating",
	},
	{
		label: "Rating (High to Low)",
		value: "averageRating_DESC",
		dataTestId: "sort-by-rating",
	},
];
