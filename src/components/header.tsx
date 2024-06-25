import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<div className="bg-slate-400">
			<div className="flex justify-between max-w-screen-xl p-2 mx-auto">
				<div>Logo</div>
				<Link className="border border-black" to="/">
					Logout
				</Link>
			</div>
		</div>
	);
}
