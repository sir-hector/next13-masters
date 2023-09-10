import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: 1,
		price: 100,
		name: "T-shirt",
		category: "T-shirt",
		coverImage: {
			src: "/product1.jpeg",
			alt: "test",
		},
	},
	{
		id: 2,
		price: 100,
		name: "Shoes",
		category: "Shoes",
		coverImage: {
			src: "/product2.jpeg",
			alt: "test",
		},
	},
	{
		id: 2,
		price: 100,
		name: "Jacket",
		category: "Jacket",
		coverImage: {
			src: "/product3.jpeg",
			alt: "test",
		},
	},
	{
		id: 2,
		price: 100,
		name: "Shirt",
		category: "Shirt",
		coverImage: {
			src: "/product4.jpeg",
			alt: "test",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto p-12">
			<ProductList products={products} />
		</section>
	);
}
