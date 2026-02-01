"use client";

const error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="w-20 h-20 rounded-full bg-[#F9BE5E]/20 flex items-center justify-center mb-6">
        <span className="text-3xl">⚠️</span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Something went wrong
      </h1>

      <p className="text-gray-600 max-w-md mb-6">
        We’re having trouble loading this page. Please refresh or try again
        later.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 rounded-md bg-[#F9BE5E] text-black font-medium hover:opacity-90 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
