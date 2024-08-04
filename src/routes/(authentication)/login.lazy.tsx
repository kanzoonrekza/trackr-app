import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent } from "react";
import AuthLayout from "../../layout/auth-layout";

export const Route = createLazyFileRoute("/(authentication)/login")({
  component: Login,
});

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <AuthLayout>
      <AuthLayout.Title>Log In</AuthLayout.Title>
      <AuthLayout.SubTitle>
        Continue where you left off and stay on trackr
      </AuthLayout.SubTitle>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
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
        <button type="submit" className="w-full bg-black p-2 text-white">
          Log In
        </button>
      </form>
      <AuthLayout.Redirect>
        Don't have an account?&nbsp;
        <Link className="underline" to="/signup">
          Sign Up
        </Link>
      </AuthLayout.Redirect>
    </AuthLayout>
  );
}
