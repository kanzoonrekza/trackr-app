import { createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";
import { FormEvent } from "react";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

export default function Login() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <MainLayout>
      <div className="bg-white max-w-md mx-auto p-6 mt-10">
        <h2 className="text-center text-3xl font-semibold">Log In</h2>
        <p className="text-center mt-6">
          Continue where you left off and stay on trackr
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 mb-3">
            <input
              type="email"
              placeholder="Email / Username"
              className="w-full p-2 border border-black"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-black"
            />
          </div>
          <button type="submit" className="mt-3 w-full p-2 text-white bg-black">
            Log In
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
