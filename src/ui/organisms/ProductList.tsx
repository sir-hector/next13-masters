import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "../types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul className="flex justify-center gap-5 flex-wrap max-w" data-testid="products-list">
			{products.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
};
