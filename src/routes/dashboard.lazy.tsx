import { createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";

export const Route = createLazyFileRoute("/dashboard")({
	component: Dashboard,
});

function Dashboard() {
	return (
		<MainLayout>
			<h3>Dashboard</h3>
		</MainLayout>
	);
}
