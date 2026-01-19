import logo from "../assets/icons/Logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-360 px-12 py-6 flex items-center">
        <img src={logo} alt="logo" />

        <ul className="flex items-center px-14 gap-12 text-md font-bold">
          
          {[
            { label: "Overview", href: "#home" },
            { label: "About Us", href: "#about" },
            { label: "Gallery", href: "#gallery" },
            { label: "News", href: "#news" },
          ].map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className="text-gray-300 hover:text-white transition"
              >
                {item.label}
              </a>

              <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 
                h-[2px] w-0 bg-lime-400 rounded-full 
                transition-all duration-300 group-hover:w-6" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
