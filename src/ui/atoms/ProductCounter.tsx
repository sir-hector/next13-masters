"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	const params = usePathname();

	return (
		<div>
			{params}
			<button onClick={() => setCounter((counter) => counter - 1)}>-</button>
			<span>{counter}</span>
			<button onClick={() => setCounter((counter) => counter + 1)}>+</button>
		</div>
	);
};
