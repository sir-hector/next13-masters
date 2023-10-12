import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBar } from "@/ui/organisms/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavigationBar />
				<section className="sm:py-15 md:max-2-4xl mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">2023</p>
				</footer>
				{modal}
			</body>
		</html>
	);
}
