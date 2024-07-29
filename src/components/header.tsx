import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <div className="bg-white border-b border-black">
      <div className="flex justify-between max-w-screen-xl items-center p-2 mx-auto">
        <Link className="text-xl font-bold" to="/dashboard">
          Logo
        </Link>
        <Link className="border border-black p-1" to="/">
          Logout
        </Link>
      </div>
    </div>
  );
}
