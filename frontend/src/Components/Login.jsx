import React from "react";

const Login = () => {
  const handleOAuthLogin = () => {
    // Directly change window location to the OAuth endpoint
    window.location.href = "http://127.0.0.1:5000/login/google";
  };

  return (
    <div className="flex">
      <div className="bg-blue-900 text-white p-8 w-1/2 h-screen flex flex-col justify-center">
        <h2 className="text-3xl mb-8 font-display">
          In a hostel, you don't just <br /> share a room; you share stories, laughter, and memories....
        </h2>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="w-96 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Welcome to My Hostel Portal</h3>
          <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
          <button
            type="button"
            onClick={handleOAuthLogin}
            className="text-lg w-96 font-semibold text-white bg-blue-500 border border-transparent px-6 py-2 rounded-2xl hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
