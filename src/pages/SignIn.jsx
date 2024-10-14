import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs'; // Import Google and Apple icons

// Custom Button component
const Button = ({ children, className, ...props }) => (
    <button
        className={`px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors ${className}`}
        {...props}
    >
        {children}
    </button>
);

// Custom Input component
const Input = ({ className, ...props }) => (
    <input
        className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
    />
);

const SignInButton = ({ provider, icon }) => (
    <div className="w-full mb-2 bg-white text-black  rounded-lg  mr-4 border-gray-300 flex items-center justify-center space-x-2 hover:bg-gray-100">
        {icon} <span className='text-[.65rem] '>Sign in with {provider}</span>
    </div>
);

const EmailInput = ({ value, onChange }) => (
    <Input
        type="email"
        placeholder="Email address"
        value={value}
        onChange={onChange}
        className="mb-2"
    />
);

const PasswordInput = ({ value, onChange }) => (
    <Input
        type="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="mb-2"
    />
);

const SignInPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log('Signing in with:', email, password);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-2/5 bg-black flex items-center justify-center">
                <h1 className="text-white text-7xl font-black">WaveTeck</h1>
            </div>
            <div className="w-3/5 flex items-center justify-center">
                <div className="w-96 p-8  rounded-lg ">
                    <h2 className="text-2xl font-black tracking-wide ">Sign In</h2>
                    <p className="text-gray-600 text-[.85rem] mb-4">Sign in to your account</p>

                    {/* Google and Apple sign-in buttons with icons */}
                    <div className='flex flex-row '>
                        <SignInButton provider="Google" icon={<BsGoogle className="text-red-300" />} />
                        <SignInButton provider="Apple" icon={<FaApple className="text-black" />} />
                    </div>

                    <form className='bg-white p-7 rounded-[1rem]'>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-black">Email address</label>
                            <input
                                type="email"
                                placeholder="elonmusk@x.com"
                                className="mt-1 block bg-gray-100 w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-mediumtext-black">Password</label>
                            <input
                                type="password"
                                placeholder="******"
                                className="mt-1 block w-full bg-gray-100  px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="flex justify-start mb-4">
                            <a href="/" className="text-sm text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-1.5 rounded-[1rem] px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
                        >
                            Sign In
                        </button>
                    </form>


                    <p className="text-center mt-4 text-sm text-gray-600">
                        Don't have an account? <a href="/dashboard" className="text-blue-500">Register here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
