export const generateStaticParams = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}) => {
	if (params.category === "t-shirts") {
		return [
			{
				pageNumber: "1",
			},
			{
				pageNumber: "2",
			},
		];
	} else {
		return [
			{
				pageNumber: "2",
			},
			{
				pageNumber: "3",
			},
		];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<div>
			<h1>
				{params.category}
				{params.pageNumber}
			</h1>
		</div>
	);
}
