function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-5 bg-transparent">



        <ul className="flex p-4 gap-12 text-2xl text-white font-small-caps">
          <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
          <li className="hover:text-gray-300 cursor-pointer transition">About Us</li>
          <li className="hover:text-gray-300 cursor-pointer transition">Gallery</li>
          <li className="hover:text-gray-300 cursor-pointer transition">News</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
