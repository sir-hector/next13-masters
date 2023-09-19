import NextImage from "next/image";
import { type FragmentType, graphql, getFragmentData } from "@/gql";

const PrductListItemCoverImage_Product = graphql(/* GraphQL */ `
	fragment ProductListItemImage_Product on Product {
		images(first: 1) {
			url
		}
	}
`);

type ProductListCoverImageProps = {
	product: FragmentType<typeof PrductListItemCoverImage_Product>;
};

export const ProductCoverImage = (
	props: ProductListCoverImageProps,
) => {
	const { images } = getFragmentData(
		PrductListItemCoverImage_Product,
		props.product,
	);
	const image = images[0] ? images[0].url : "null";
	return (
		<div className="bo aspect-square overflow-hidden rounded-md border bg-slate-50">
			<NextImage
				src={image}
				alt={""}
				height={320}
				width={320}
				className=""
			/>
		</div>
	);
};
