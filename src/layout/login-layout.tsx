import Header from "../components/header-login";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
}
