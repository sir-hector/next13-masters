export const ProductCoverImage = ({
	url,
	alt,
}: {
	url: string;
	alt: string;
}) => {
	return (
		<div className="bo aspect-square overflow-hidden rounded-md border bg-slate-50">
			<img
				src={url}
				alt={alt}
				height={320}
				width={320}
				className=""
			/>
		</div>
	);
};
