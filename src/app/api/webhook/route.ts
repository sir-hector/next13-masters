import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();

	if (
		typeof json === "object" &&
		json &&
		"data" in json &&
		typeof json.data === "object" &&
		json.data &&
		"id" in json.data &&
		typeof json.data.id === "string"
	) {
		revalidatePath(`/product/${json.data.id}`);
		revalidatePath(`/products`);
		return NextResponse.json({}, { status: 201 });
	}

	return NextResponse.json(
		{ message: "Invalid body" },
		{ status: 400 },
	);
}
