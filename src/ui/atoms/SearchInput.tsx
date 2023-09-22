"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const [value, setValue] = useState("");
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(
		null,
	);

	const onSearch = (
		event: React.KeyboardEvent<HTMLInputElement>,
	): void => {
		if (event.key === "Enter") {
			router.push(`/search?query=${event.currentTarget.value}`);
		}
		setValue(event.currentTarget.value);
	};

	useEffect(() => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		setTimeoutId(
			setTimeout(() => {
				if (value) {
					router.push(`/search?query=${value}`);
				}
			}, 500),
		);

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [value]);

	return (
		<input
			type="text"
			role="searchbox"
			placeholder="Search"
			onKeyUp={onSearch}
			className="text-black"
		/>
	);
};
