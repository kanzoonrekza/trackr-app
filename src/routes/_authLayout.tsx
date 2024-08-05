import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout")({
  component: AuthLayout,
});

export default function AuthLayout() {
  return (
    <div className="grid h-screen w-screen">
      <div className="col-start-1 row-start-1 grid place-items-center">
        <main className="flex w-full max-w-md flex-col gap-2">
          <Outlet />
        </main>
      </div>
      <div className="col-start-1 row-start-1 size-0 p-2">
        <span className="w-fit text-xl font-bold">Logo</span>
      </div>
    </div>
  );
}

AuthLayout.Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-center text-3xl font-bold">{children}</h1>;
};

AuthLayout.SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="mb-5 text-center text-lg">{children}</h2>;
};

AuthLayout.Redirect = ({ children }: { children: React.ReactNode }) => {
  return <p className="ml-auto w-fit text-sm">{children}</p>;
};
