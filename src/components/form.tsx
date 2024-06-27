export default function Form() {
    return (
        <div className="bg-white max-w-md mx-auto p-6 mt-10">
            <h2 className="text-center text-3xl font-semibold">
                Sign Up
            </h2>
            <p className="text-center mt-6">
                Start tracking by creating your account today for free!
            </p>
            <form>
                <div className="mt-4 mb-3">
                    <input type="email" placeholder="Email" className="w-full p-2 border border-black" />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="w-full p-2 border border-black" />
                </div>
                <button className="mt-3 w-full p-2 text-white bg-black">
                    Sign Up
                </button>
            </form>
        </div>
        
    )
}
