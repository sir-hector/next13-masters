export default function SigleProduct({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	return (
		<div>
			<h1>Sigle Product Page</h1>
			{params.productId},{searchParams.referral}
		</div>
	);
}
