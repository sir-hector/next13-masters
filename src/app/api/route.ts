import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json(Math.random());
}
