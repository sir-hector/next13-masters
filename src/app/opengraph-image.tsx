import { ImageResponse } from "next/server";

export const runtime = "edge";

export const contentType = "image/png";

export const size = {
	width: 1200,
	height: 630,
};

export default function OpenGraphImage({}) {
	return new ImageResponse(<div>Siema</div>);
}
