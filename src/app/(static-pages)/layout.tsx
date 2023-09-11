export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return <div className="mx-auto max-w-md p-12">{children}</div>;
}
