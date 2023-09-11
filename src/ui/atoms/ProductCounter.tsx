"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button onClick={() => setCounter((counter) => counter - 1)}>-</button>
			<span>{counter}</span>
			<button onClick={() => setCounter((counter) => counter + 1)}>+</button>
		</div>
	);
};
