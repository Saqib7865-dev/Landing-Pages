const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-10 items-center">
        <li>
          <a href="/" className="text-[#054C73] font-semibold text-sm">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="text-[#054C73] font-semibold text-sm">
            Services
          </a>
        </li>
        <li>
          <a href="doctors" className="text-[#054C73] font-semibold text-sm">
            Doctors
          </a>
        </li>
        <li>
          <a href="products" className="text-[#054C73] font-semibold text-sm">
            Products
          </a>
        </li>
        <li>
          <a href="gallery" className="text-[#054C73] font-semibold text-sm">
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
