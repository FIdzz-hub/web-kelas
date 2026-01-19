import logo from "../assets/icons/Logo.png";

function Navbar() {
  return (
    <>
    <header className="w-full">
      <nav className="mx-auto max-w-360 px-12 py-6 flex items-center">
        <div>
          <img src={logo} alt="logo"/>
          </div>

        <ul className="flex items-center px-14 gap-12 text-md font-bold text-gray-300">
          <li className="hover:text-white cursor-pointer">Overview</li>
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Gallery</li>
          <li className="hover:text-white cursor-pointer">News</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar;
