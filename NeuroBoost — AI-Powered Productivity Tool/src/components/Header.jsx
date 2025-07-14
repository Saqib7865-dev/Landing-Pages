const Header = () => {
  return (
    <div className="py-6 flex items-center justify-around absolute bg-transparent w-full shadow">
      <div id="logo">
        <a
          href="/"
          className="uppercase font-poppins bg-gradient-to-br from-purple-600 to-blue-500 text-transparent bg-clip-text font-bold text-2xl"
        >
          Neuroboost
        </a>
      </div>
      <nav>
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
    </div>
  );
};

export default Header;
