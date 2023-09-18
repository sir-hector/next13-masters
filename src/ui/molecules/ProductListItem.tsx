import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<article className="flex flex-col">
			<Link href={`/product/${product.id}`}>
				{product.images[0] && (
					<ProductCoverImage url={product.images[0].url} alt="" />
				)}
				<ProductListItemDescription product={product} />
			</Link>
		</article>
	);
};
