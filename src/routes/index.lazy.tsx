import { useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";

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
    <MainLayout>
      <h3>Welcome Home!</h3>
      <Link to="/dashboard">Dashboard</Link>
      <p>{isLoading ? "Loading..." : data.message}</p>
    </MainLayout>
  );
}
