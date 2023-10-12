/// <reference types="stripe-event-types" />
import { NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe key");
	}

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing Stripe key");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signatures");

	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	// TO DO
	switch (event.type) {
		case "checkout.session.completed": {
			event.data.object.metadata?.cartId;
		}
		case "checkout.session.expired": {
		}
		case "checkout.session.async_payment_failed": {
		}
	}

	return new Response("OK", { status: 200 });
}
