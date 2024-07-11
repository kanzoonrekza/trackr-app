import { createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard")({
	component: Dashboard,
});

function Dashboard() {
	return (
		<MainLayout>
			<div className="max-w-screen-xl p-12 mx-auto mt-10">
				<div className="flex justify-between mb-10">
					<h3 className="text-4xl font-bold">Trackr List</h3>
					<Link
						className="px-4 py-2 font-medium border border-black"
						to="/createtrackr"
					>
						New Trackr
					</Link>
				</div>
				<div className="space-y-4">
					<div className="flex items-center justify-between p-4 border border-black">
						<div>
							<h2 className="text-xl font-semibold">Series title</h2>
							<p>Episodes</p>
						</div>
						<div className="flex items-center space-x-2">
							<button className="px-2 border border-black">+1</button>
							<button className="px-2 border border-black">++</button>
							<button className="px-2 border border-black">...</button>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
