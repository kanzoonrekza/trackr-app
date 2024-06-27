import { createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";

export const Route = createLazyFileRoute("/dashboard")({
	component: Dashboard,
});

function Dashboard() {
	return (
		<MainLayout>
			<div className="mt-10 p-12 mx-auto max-w-screen-xl">
				<div className="mb-10 flex justify-between">
					<h3 className="text-4xl font-bold">
						Trackr List
					</h3>
					<button className="border border-black px-4 py-2 font-medium">
						New Trackr
					</button>
				</div>
				<div className="space-y-4">
					<div className="border border-black p-4 flex justify-between items-center">
						<div>
							<h2 className="text-xl font-semibold">Series title</h2>
							<p>Episodes</p>
						</div>
						<div className="flex items-center space-x-2">
							<button className="border border-black px-2">+1</button>
							<button className="border border-black px-2">++</button>
							<button className="border border-black px-2">...</button>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
