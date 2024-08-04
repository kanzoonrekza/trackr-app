import { Link } from "@tanstack/react-router";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <div className="border-b border-black bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2">
        <Link className="text-xl font-bold" to="/dashboard">
          Logo
        </Link>
        <SearchBar />
        <Link className="border border-black p-1" to="/">
          Logout
        </Link>
      </div>
    </div>
  );
}
