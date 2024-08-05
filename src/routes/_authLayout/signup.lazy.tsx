import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent } from "react";
import AuthLayout from "../_authLayout";

export const Route = createLazyFileRoute("/_authLayout/signup")({
  component: Signup,
});

export default function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({ to: "/login" });
  };

  return (
    <>
      <AuthLayout.Title>Sign Up</AuthLayout.Title>
      <AuthLayout.SubTitle>
        Start tracking by creating your account today for free!
      </AuthLayout.SubTitle>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
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
        <button type="submit" className="w-full bg-black p-2 text-white">
          Sign Up
        </button>
      </form>
      <AuthLayout.Redirect>
        Already have an account?&nbsp;
        <Link className="underline" to="/login">
          Log In
        </Link>
      </AuthLayout.Redirect>
    </>
  );
}
