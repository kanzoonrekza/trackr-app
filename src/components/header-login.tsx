import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2">
        <Link className="text-xl font-bold" to="/dashboard">
          Logo
        </Link>
        <p className="font-medium">
          <span>Don't have an account? </span>
          <Link className="underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
