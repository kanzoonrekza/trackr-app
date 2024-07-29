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
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="bg-white max-w-md w-full">
                    <h2 className="text-center text-3xl font-semibold">Sign Up</h2>
                    <p className="text-center mt-6">
                        Start tracking by creating your account today for free!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 mb-3">
                            <input
                                type="email"
                                placeholder="Email"
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
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </SignupLayout>
    );
}
