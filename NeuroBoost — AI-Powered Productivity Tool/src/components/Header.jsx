import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
const Header = () => {
  

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="py-4 md:py-6 flex items-center justify-between px-4 md:px-0 md:justify-around absolute bg-transparent w-full shadow">
      <div id="logo">
        <a
          href="/"
          className="uppercase font-poppins bg-gradient-to-br from-purple-600 to-blue-500 text-transparent bg-clip-text font-bold text-lg md:text-2xl"
        >
          Neuroboost
        </a>
      </div>
      <nav className="hidden md:inline-block">
        <ul className="flex font-inter gap-x-6">
          <li className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <a href="/">Home</a>
          </li>
          <li className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <a href="/">Features</a>
          </li>
          <li className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <a href="/">How It Works?</a>
          </li>
          {/* <li className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <a href="/">Testimonials</a>
          </li> */}
        </ul>
      </nav>

      {/* Navbar for small devices */}
      <div className="hamburger inline-block md:hidden">
        <Menu className="text-white" onClick={() => setShowMenu(true)} />
      </div>

      <div
        className={`mini-menu fixed inset-0 bg-gradient-to-bl from-blue-500 to-purple-500 transition-all transform z-50 duration-700 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="close text-white text-end p-4 font-bold absolute top-0 right-0"
          onClick={() => setShowMenu(false)}
        >
          X
        </div>
        <ul className="flex flex-col font-inter gap-y-6 h-full items-center justify-center">
          <li className="text-white font-semibold">
            <a href="/">Home</a>
          </li>
          <li className="text-white font-semibold">
            <a href="/">Features</a>
          </li>
          <li className="text-white font-semibold">
            <a href="/">How It Works?</a>
          </li>
          {/* <li className="text-white font-semibold">
            <a href="/">Testimonials</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
