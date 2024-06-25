import { useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const { isPending, data } = useQuery({
		queryKey: ["todos"],
		queryFn: () =>
			new Promise<string>((resolve) => {
				setTimeout(() => {
					resolve("Mock fetching data");
				}, 1000);
			}),
	});

	return (
		<MainLayout>
			<h3>Welcome Home!</h3>
			<Link to="/dashboard">Dashboard</Link>
			<p>{isPending ? "Loading..." : data}</p>
		</MainLayout>
	);
}
