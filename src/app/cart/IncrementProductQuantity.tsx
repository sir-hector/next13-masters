"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);
	return (
		<form>
			<p data-testid="quantity">{optimisticQuantity}</p>
			<button
				className="ml-2 h-8 w-8 border bg-slate-50 text-black"
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
			<button
				className="ml-2 h-8 w-8 border bg-slate-50 text-black"
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
		</form>
	);
};
