import Link from "next/link";
import type { ProductItemType } from "../types";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<article className="flex flex-col">
			<Link href={`/product/${product.id}`}>
				{product.coverImage && (
					<ProductCoverImage {...product.coverImage} />
				)}
				<ProductListItemDescription product={product} />
			</Link>
		</article>
	);
};
