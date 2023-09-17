import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({
	numberOfPages,
}: {
	numberOfPages: number;
}) => {
	return (
		<nav>
			<ul
				aria-label="pagination"
				className="mt-8 flex justify-center gap-4 rounded-md"
			>
				{Array.from(Array(numberOfPages).keys()).map((pageNumber) => (
					<ActiveLink
						key={pageNumber}
						href={`/products/${pageNumber + 1}`}
						className="hover:text-blue text-blue-500"
						activeClassName="underline border-black"
						exact={true}
					>
						{pageNumber + 1}
					</ActiveLink>
				))}
			</ul>
		</nav>
	);
};
