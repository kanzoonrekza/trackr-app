import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent } from "react";
import AuthLayout from "../_authLayout";
import { useMutation } from "@tanstack/react-query";
import { FetchInternal } from "../../services/internal";

export const Route = createLazyFileRoute("/_authLayout/signup")({
  component: Signup,
});

export default function Signup() {
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async ({ formData }: { formData: FormData }) => {
      return FetchInternal.signup({ formData });
    },
    onSuccess: (data) => {
      if (data.statusCode !== 200) {
        return alert(data.message)
      }
      
      alert("Signup successful")
      navigate({ to: "/login" });
    },
    onError: (error) => {
      console.log("An error occurred", error)
    }
  })
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      alert("Passwords do not match")
      return
    }

    signupMutation.mutate({ formData: formData })
    // navigate({ to: "/login" });
  };

  return (
    <>
      <AuthLayout.Title>Sign Up</AuthLayout.Title>
      <AuthLayout.SubTitle>
        Start tracking by creating your account today for free!
      </AuthLayout.SubTitle>
      <form id="signup-form" onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <input
            required
            name="username"
            type="text"
            placeholder="Username"
            className="w-full border border-black p-2"
          />
        </div>
        <div>
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border border-black p-2"
          />
        </div>
        <div>
          <input
            required
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border border-black p-2"
          />
        </div>
        <div>
          <input
            required
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-black p-2"
          />
        </div>
        <button type="submit" className="w-full bg-black p-2 text-white disabled:opacity-50" disabled={signupMutation.isPending}>
          {signupMutation.isPending ? "Loading..." : "Sign Up"}
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
