const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[#F9BE5E]/30"></div>
        <div className="absolute inset-0 rounded-full border-4 border-[#F9BE5E] border-t-transparent animate-spin"></div>
      </div>

      <p className="mt-4 text-gray-700 font-medium">
        Loading, please wait...
      </p>
    </div>
  )
}

export default Loading
