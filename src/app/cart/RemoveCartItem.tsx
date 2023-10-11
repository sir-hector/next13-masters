"use client";

import { useRouter } from "next/navigation";
import { removeItem } from "./actions";
import { useTransition } from "react";

export const RemoveCartItem = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			className="text-red-500"
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(itemId);
					router.refresh();
				})
			}
		>
			REMOVE
		</button>
	);
};
