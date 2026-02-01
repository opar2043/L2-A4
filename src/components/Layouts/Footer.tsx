import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} FoodHub. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <Link href="#" className="hover:text-[#F5B854] transition">
            Privacy
          </Link>
          <Link href="#" className="hover:text-[#f19a0c] transition">
            Terms
          </Link>
          <Link href="#" className="hover:text-[#F5B854] transition">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer
