import { createLazyFileRoute } from "@tanstack/react-router";
import { FormEvent } from "react";
import LoginLayout from "../layout/login-layout";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

export default function Login() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <LoginLayout>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white">
          <h2 className="text-center text-3xl font-semibold">Log In</h2>
          <p className="mt-6 text-center">
            Continue where you left off and stay on trackr
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
              <input
                type="email"
                placeholder="Email / Username"
                className="w-full border border-black p-2"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-black p-2"
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full bg-black p-2 text-white"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </LoginLayout>
  );
}
