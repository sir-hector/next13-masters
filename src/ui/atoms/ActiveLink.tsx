"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(`text-blue-500 hover:text-blue-300`, isActive && `underline`)}
		>
			{children}
		</Link>
	);
};
