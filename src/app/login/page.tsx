"use client";
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/portal');
    };
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center w-1/2 bg-white p-12">
                <img src="/images/GM.jpg" alt="Logo" className="mb-0 w-64 h-64" />
                <h1 className="text-4xl font-bold mb-4 text-black">Gaya Motor Portal Web</h1>
                <p className="text-gray-700 text-lg">Welcome to the Gaya Motor SSO Portal Web. Please Sign In to Continue.</p>
            </div>
            {/* Right Section */}
            <div
                className="flex flex-col justify-center items-center w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Wallpaper.png')" }}
            >
                <div className="bg-white bg-opacity-80 p-8 rounded-3xl shadow-lg w-96">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                            <p className="text-gray-600">Please enter your credentials</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">User ID</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                                placeholder="Enter your user ID"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-800 transition duration-200"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="#" className="text-teal-700 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}