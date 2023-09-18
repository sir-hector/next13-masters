import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col justify-between">
			<div>
				<h3 className="text-lg font-semibold">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-500">
						{categories[0].name}
					</p>
				)}
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
