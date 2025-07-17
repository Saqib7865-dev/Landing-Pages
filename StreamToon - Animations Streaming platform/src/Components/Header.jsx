import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useScrollContext } from "../Providers/ScrollContext";

const Header = () => {
  const [showMini, setShowMini] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setScrollY } = useScrollContext();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-50 h-[60px] md:h-[80px] px-3 md:px-0 w-full flex justify-between space-x-4 md:space-x-0 md:justify-around items-center shadow transition-all duration-700 ease-in ${
        isScrolled ? "bg-gray-50 sticky top-0" : "bg-transparent absolute"
      }`}
    >
      <span className="font-bold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-amber-500 uppercase tracking-wider font-mono">
        StreamToon
      </span>
      <nav className="hidden md:flex items-center justify-center space-x-16">
        <ul className="flex items-center justify-center space-x-5">
          <li>
            <a
              href="#hero"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#latest"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Latest Movies/Episodes
            </a>
          </li>
          <li>
            <a
              href="#special"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Our Special
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="#episodes"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Episodes
            </a>
          </li> */}
          <li>
            <a
              href="#features"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#howItWorks"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#howItWorks"
              className={`${
                isScrolled ? "text-slate-900" : "text-white"
              } text-sm font-mono`}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="p-2 rounded bg-gradient-to-br from-indigo-600 to-amber-600 text-white cursor-pointer shadow-md text-xs font-mono">
          Explore the Website
        </button>
      </nav>

      {/* Mini Navbar */}

      <div className="flex md:hidden items-center space-x-2">
        <button className="p-2 px-1 rounded bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-white cursor-pointer shadow-md  tracking-wider font-semibold text-xs md:hidden">
          Explore the Website
        </button>
        <GiHamburgerMenu
          onClick={() => setShowMini(true)}
          className={`md:hidden text-3xl ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        />
      </div>

      <div
        className={`
        fixed inset-0 transform bg-gradient-to-tr from-indigo-500 to-amber-500 transition-all duration-500 p-5 ease-in-out ${
          showMini ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div
          className="text-white text-end font-semibold"
          onClick={() => setShowMini(false)}
        >
          X
        </div>
        <nav className="nav-container flex items-center justify-center w-full h-full">
          <ul className="flex flex-col items-center justify-center space-y-6 w-full ">
            <li>
              <a href="#hero" className="text-white text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#latest" className={`text-white text-sm font-mono`}>
                Latest Movies
              </a>
            </li>
            <li>
              <a href="#special" className={`text-white text-sm font-mono`}>
                Our Special
              </a>
            </li>
            <li>
              <a href="#about" className="text-white text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#episodes" className="text-white text-sm">
                Episodes
              </a>
            </li>
            <li>
              <a href="#features" className="text-white text-sm">
                Features
              </a>
            </li>
            <li>
              <a href="#howItWorks" className="text-white text-sm">
                Pricing
              </a>
            </li>
            <li>
              <a href="#howItWorks" className="text-white text-sm">
                Contact
              </a>
            </li>
            <button className="cursor-pointer text-white tracking-wider font-semibold">
              Explore the Website
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
