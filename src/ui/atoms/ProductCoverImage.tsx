export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="bo aspect-square overflow-hidden rounded-md border bg-slate-50">
			<img src={src} alt={alt} height={320} width={320} className="" />
		</div>
	);
};
