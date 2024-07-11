import { useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const { data, isLoading } = useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_BASE_URL}/hello`);
			return response.json();
		},
	});

	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
			<Link to="/about">About</Link>
			<p>{isLoading ? "Loading..." : data.message}</p>
		</div>
	);
}
