import { createLazyFileRoute } from "@tanstack/react-router";
import { FormEvent } from "react";
import SignupLayout from "../layout/signup-layout";

export const Route = createLazyFileRoute("/signup")({
  component: Signup,
});

export default function Signup() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Signup");
  };

  return (
    <SignupLayout>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white">
          <h2 className="text-center text-3xl font-semibold">Sign Up</h2>
          <p className="mt-6 text-center">
            Start tracking by creating your account today for free!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
              <input
                type="email"
                placeholder="Email"
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </SignupLayout>
  );
}
