import YourSpaceImg from "../assets/Your Space.png";
const YourSpace = () => {
  return (
    <div className="w-full p-10 md:px-32 md:py-14 bg-blue-50 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 relative">
      <div className="left flex flex-col space-y-6 h-full justify-center md:max-w-1/2">
        <h3 className="text-xl md:text-3xl font-bold md:font-semibold">
          Beautify Your Space
        </h3>
        <p className="text-sm md:text-base text-justify">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button className="bg-[#054C73] rounded md:rounded-full text-white text-sm md:text-base cursor-pointer px-2 py-2 md:py-4 md:px-10 font-semibold shadow-md w-fit">
          LEARN MORE
        </button>
      </div>
      <div className="img relative">
        <img
          src={YourSpaceImg}
          alt="Img"
          className="h-auto max-h-[18rem] md:max-h-[30rem] relative z-10"
        />
        <div className="circle w-40 h-40 md:w-56 md:h-56 rounded-full bg-green-900 absolute -right-14 top-14"></div>
      </div>
    </div>
  );
};

export default YourSpace;
