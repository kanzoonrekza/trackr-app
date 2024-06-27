import Header from "../components/header";
import Form from "../components/form";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />
			<Form/>
			<main>{children}</main>
		</div>
	);
}
