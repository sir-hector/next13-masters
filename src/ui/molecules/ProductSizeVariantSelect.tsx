import { type ProductSize } from "@/gql/graphql";

export const ProductSizeVariantSelect = ({
	variants,
}: {
	variants: ProductSize[];
}) => {
	return (
		<label>
			Pick size:
			<select className="text-black">
				{variants.map((variant) => (
					<option
						key={variant}
						className="text-black"
						value={variant}
					>
						{variant}
					</option>
				))}
			</select>
		</label>
	);
};
