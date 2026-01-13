function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-5 bg-transparent">

        <ul className="flex p-4 gap-12 text-2xl text-white font-small-caps">
          <li className="relative cursor-pointer hover:text-gray-300 transition group">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
          <li className="relative cursor-pointer hover:text-gray-300 transition group">
            About Us
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
          <li className="relative cursor-pointer hover:text-gray-300 transition group">
            Gallery
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
          <li className="relative cursor-pointer hover:text-gray-300 transition group">
            News
            <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
