import aboutImg from "../assets/aboutimg.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const About = () => {
  const items = [
    {
      children: (
        <>
          <h4 className="font-mono font-semibold">Ad-Free HD Streaming</h4>
        </>
      ),
    },
    {
      children: "Unlimited Animated Series",
    },
  ];
  return (
    <section
      id="about"
      className="pt-20 pb-0 px-10 bg-gradient-to-r from-amber-600 to-indigo-600 w-full"
    >
      <h2 className="text-center text-white text-6xl uppercase font-semibold font-mono">
        About StreamToon
      </h2>
      <div className="decription py-20 flex justify-between items-center">
        <div className="img min-w-1/2 flex items-center justify-center">
          <img src={aboutImg} alt="About Image" className="w-3/4" />
        </div>
        <div className="right w-full flex flex-col items-center h-full gap-y-10">
          <h4 className="text-white font-bold text-4xl font-mono">
            Why StreamToon?
          </h4>
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
