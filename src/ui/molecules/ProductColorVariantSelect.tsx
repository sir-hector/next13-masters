import { type ProductColor } from "@/gql/graphql";

export const ProductColorVariantSelect = ({
	variants,
}: {
	variants: ProductColor[];
}) => {
	return (
		<label>
			Pick color:
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
