import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ cateogry: "t-shirts" }, { cateogry: "boots" }];
};

export default function CategoryProdtuctLayout({ children }: { children: ReactNode }) {
	return children;
}
