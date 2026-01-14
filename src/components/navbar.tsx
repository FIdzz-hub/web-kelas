function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-10 py-5 bg-transparent">
          <ul className="flex p-6 gap-12 text-2xl text-white font-semibold">

            <li className="relative group">
              <a href="#home" className="cursor-pointer hover:text-gray-300 transition">
                Home
              </a>
              <span className="absolute left-0 -bottom-1 h-2px bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>

            <li className="relative group">
              <a href="#about" className="cursor-pointer hover:text-gray-300 transition">
                About Us
              </a>
              <span className="absolute left-0 -bottom-1 h-2px bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>

            <li className="relative group">
              <a href="#gallery" className="cursor-pointer hover:text-gray-300 transition">
                Gallery
              </a>
              <span className="absolute left-0 -bottom-1 h-2px bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>

            <li className="relative group">
              <a href="#news" className="cursor-pointer hover:text-gray-300 transition">
                News
              </a>
              <span className="absolute left-0 -bottom-1 h-2px bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
