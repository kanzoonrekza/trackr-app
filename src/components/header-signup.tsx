import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<div className="bg-white">
			<div className="flex justify-between max-w-screen-xl items-center p-2 mx-auto">
				<Link className="text-xl font-bold" to="/dashboard">Logo</Link>
				<p className="font-medium">
					<span>Already have an account? </span>
					<Link className="underline" to="/login">Log In</Link>
				</p>
			</div>
		</div>
	);
}
