import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<div className="bg-white">
			<div className="flex justify-between max-w-screen-xl items-center p-2 mx-auto">
				<Link className="text-xl font-bold" to="/dashboard">Logo</Link>
				<p className="font-medium">
					<span>Don't have an account? </span>
					<Link className="underline" to="/signup">Sign Up</Link>
				</p>
			</div>
		</div>
	);
}
