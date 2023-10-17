import { type FragmentType, graphql, getFragmentData } from "@/gql";

const PrductListItemDescription_Product = graphql(/* GraphQL */ `
	fragment ProductListItem_Product on Product {
		name
		price
		categories(first: 1) {
			name
			slug
		}
	}
`);

type ProductListItemDescriptionProps = {
	product: FragmentType<typeof PrductListItemDescription_Product>;
};

export const ProductListItemDescription = (
	props: ProductListItemDescriptionProps,
) => {
	const { name, categories, price } = getFragmentData(
		PrductListItemDescription_Product,
		props.product,
	);
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
				<p
					className="text-lg font-semibold"
					data-testid="product-price"
				>
					{price}zł
				</p>
			</div>
		</div>
	);
};
