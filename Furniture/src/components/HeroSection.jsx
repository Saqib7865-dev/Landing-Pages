import bg from "../assets/HeroImg.jpg";
const HeroSection = () => {
  return (
    <div
      className={`min-h-[calc(100vh-100px)] w-full relative`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="px-7 md:px-10 py-8 md:py-5 bg-[#DFE9F4] rounded-xl md:min-w-96 md:max-w-[40rem] shadow md:shadow-lg absolute top-14 right-5 left-5 md:right-10 md:left-auto md:bottom-10">
        <div className="textContainer">
          <span className="text-sm md:text-base text-[#054C73]">
            New Arrival
          </span>
          <h1 className="text-4xl md:text-7xl leading-snug text-[#054C73] font-bold pb-5 md:pb-10 pt-5">
            Discover Our New Collection
          </h1>
          <p className="text-sm md:text-base/8 pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#054C73] rounded-full text-white cursor-pointer py-2 md:py-4 px-8 md:px-20 font-bold shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
