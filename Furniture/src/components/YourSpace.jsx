import YourSpaceImg from "../assets/Your Space.png";
const YourSpace = () => {
  return (
    <div className="w-full px-32 py-14 bg-blue-50 flex items-center justify-center space-x-10 relative">
      <div className="left flex flex-col space-y-6 h-full justify-center max-w-1/2">
        <h3 className="text-3xl font-semibold">Beautify Your Space</h3>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button className="bg-[#054C73] rounded-4xl text-white cursor-pointer py-4 px-10 font-bold shadow-md w-fit">
          LEARN MORE
        </button>
      </div>
      <div className="img relative">
        <img
          src={YourSpaceImg}
          alt="Img"
          className="h-auto max-h-[30rem] relative z-10"
        />
        <div className="circle w-56 h-56 rounded-full bg-green-900 absolute -right-14 top-14"></div>
      </div>
    </div>
  );
};

export default YourSpace;
