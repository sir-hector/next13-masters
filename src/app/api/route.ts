import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = true;
export const dynamicParams = true;

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json(Math.random());
}
