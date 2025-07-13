import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 px-28 shadow">
      <div id="logo">
        <h4 className="text-3xl font-semibold text-[#054C73]">
          <a href="/">Furniture</a>
        </h4>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
