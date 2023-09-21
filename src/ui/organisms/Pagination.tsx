import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export function Pagination<T extends string>({
	numberOfPages,
	href,
}: {
	href: Route<T>;
	numberOfPages: number;
}) {
	return (
		<nav>
			<ul
				aria-label="pagination"
				className="mt-8 flex justify-center gap-4 rounded-md"
			>
				{Array.from(Array(numberOfPages).keys()).map((pageNumber) => (
					<ActiveLink
						key={pageNumber}
						href={`${href}/${pageNumber + 1}` as Route}
						className="text-white hover:text-blue-500"
						activeClassName="underline border-black"
						exact={true}
					>
						{pageNumber + 1}
					</ActiveLink>
				))}
			</ul>
		</nav>
	);
}
