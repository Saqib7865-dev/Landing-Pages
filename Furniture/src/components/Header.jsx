import { useState } from "react";
import Navbar from "./Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  return (
    <div className="flex items-center justify-between py-4 md:py-8 px-7 md:px-28 shadow">
      <div id="logo">
        <h4 className="text-3xl font-semibold text-[#054C73]">
          <a href="/">Furniture</a>
        </h4>
      </div>
      <Navbar />
      <div className="hamburger lg:hidden flex items-center justify-center">
        <RxHamburgerMenu
          className="text-base inline-block"
          onClick={() => setShowResponsiveNavbar(true)}
        />
      </div>
      <div
        className={`fixed inset-0 bg-[#054C73] z-50 text-white py-4 transition-opacity duration-300 ${
          showResponsiveNavbar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full h-full transform transition-transform duration-700 ease-in-out absolute top-0 py-6 ${
            showResponsiveNavbar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end px-7">
            <IoMdClose
              className="text-lg font-bold cursor-pointer"
              onClick={() => setShowResponsiveNavbar(false)}
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <ul className="text-center flex flex-col gap-y-3">
              {["Home", "Services", "Doctors", "Products", "Gallery"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="font-semibold uppercase active:text-gray-500 transition-colors duration-300 ease-in-out text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
