import { useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

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
		<div className="p-2">
			<h3>Welcome Home!</h3>
			<Link to="/dashboard">About</Link>
			<p>{isPending ? "Loading..." : data}</p>
		</div>
	);
}
