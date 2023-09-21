export default function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<div>
			<h1>Search Page</h1>
			<br />
			{searchParams ? JSON.stringify(searchParams) : ""}
			Post2
		</div>
	);
}
