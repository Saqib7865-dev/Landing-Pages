import aboutImg from "../assets/aboutimg.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const About = () => {
  return (
    <section
      id="about"
      className="pt-10 md:pt-20 pb-0 px-5 md:px-10 bg-gradient-to-r from-amber-600 to-indigo-600 w-full"
    >
      <h2 className="sm:text-center text-white text-2xl sm:text-6xl uppercase font-semibold font-mono">
        Why StreamToon
      </h2>
      <div className="decription py-5 sm:py-10 md:py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-y-10 md:gap-y-0">
        <div className="img sm:min-w-1/2 flex items-center justify-center">
          <img src={aboutImg} alt="About Image" className="md:w-3/4" />
        </div>
        <div className="right w-full flex flex-col items-center h-full gap-y-5 md:gap-y-10">
          <p className="text-white text-justify text-base md:text-lg leading-relaxed w-full md:w-1/2 font-serif">
            Step into the animated universe like never before. With StreamToon,
            every frame tells a story — whether it's a nostalgic classic or a
            brand-new adventure. Enjoy stunning visuals, high-definition
            quality, and seamless streaming, all tailored for true animation
            lovers.
          </p>
          <button className="relative text-white p-2 border rounded w-fit cursor-pointer font-mono overflow-hidden group">
            <span className="relative z-10 flex items-center justify-center gap-x-2 group whitespace-nowrap w-50">
              Explore Website
              <MdOutlineArrowRightAlt className="text-xl w-0 group-hover:w-full transition-all duration-1000 ease-in-out" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></span>
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default About;
