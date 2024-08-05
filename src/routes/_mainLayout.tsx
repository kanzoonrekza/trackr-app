import { Outlet, createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createFileRoute("/_mainLayout")({
  component: MainLayout,
});

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
