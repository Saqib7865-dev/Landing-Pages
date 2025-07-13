import bg from "../assets/HeroImg.jpg";
const HeroSection = () => {
  return (
    <div
      className={`min-h-[calc(100vh-100px)] w-full relative`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center center",
        backgroundSize: "contain",
      }}
    >
      <div className="px-10 py-5 bg-[#DFE9F4] rounded-xl min-w-96 max-w-[40rem] shadow-lg absolute bottom-10 right-10">
        <div className="textContainer">
          <span className="text-base text-[#054C73]">New Arrival</span>
          <h1 className="text-7xl/snug text-[#054C73] font-bold pb-10 pt-5">
            Discover Our New Collection
          </h1>
          <p className="text-base/8 pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#054C73] rounded-4xl text-white cursor-pointer py-4 px-20 font-bold shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
