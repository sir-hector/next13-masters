"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	className: string;
	activeClassName: string;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = true,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
