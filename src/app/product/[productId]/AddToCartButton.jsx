"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 text-black shadow-sm transition-shadow hover:shadow-sm disabled:bg-slate-300"
		>
			Add to cart
		</button>
	);
};
