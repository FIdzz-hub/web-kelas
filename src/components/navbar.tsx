import logo from "../assets/icons/Logo.png";

function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="mx-auto max-w-360 px-12 py-6 flex items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <ul className="flex items-center px-14 gap-12 text-md font-bold text-gray-300">
            <a href="#home"><li className="hover:text-white cursor-pointer">Overview</li></a>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <a href="#gallery"><li className="hover:text-white cursor-pointer">Gallery</li></a>
            <li className="hover:text-white cursor-pointer">News</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
