import { type ProductItemType } from "../types";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { name, category, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col justify-between">
			<div>
				<h3 className="text-lg font-semibold">{name}</h3>
				<p className="text-sm text-gray-500">{category}</p>
			</div>
			<div className="flex justify-between">
				<p className="text-lg font-semibold">{price}zł</p>
				<button className="rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white">
					Dodaj do koszyka
				</button>
			</div>
		</div>
	);
};
