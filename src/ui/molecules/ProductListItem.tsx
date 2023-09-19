import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListCoverImageProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListCoverImageProps) => {
	return (
		<article className="flex flex-col">
			<Link href={`/product/${product.id}`}>
				<ProductCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</Link>
		</article>
	);
};
