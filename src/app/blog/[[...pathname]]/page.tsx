export default function Page({ params }: { params: { pathname: string[] } }) {
	return (
		<div>
			<h1>Blog Page</h1>
			Post1
			<br />
			{params.pathname ? params.pathname.join("/") : ""}
			Post2
		</div>
	);
}
