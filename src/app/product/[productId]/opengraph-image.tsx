import { getProductById } from "@/api/products";
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	// TO DO - style image

	return new ImageResponse(
		(
			<div
				style={{
					// fontSize: 128,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					// justifyContent: "center",
				}}
			>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<img
						src={product.images[0]?.url}
						alt="Product main image"
						style={{ width: "50%" }}
					/>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ fontSize: 24 }}>{product.name}</p>
						<p style={{ fontSize: 12 }}>
							Category: {product.categories[0]?.name}
						</p>
						<p style={{ fontSize: 10 }}>{product.description}</p>
					</div>
				</div>
			</div>
		),
	);
}
