import { useEffect } from "react";
import heroSvg from "../assets/HeroSectionSVG.svg";
import Aos from "aos";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 20,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row items-center justify-center md:gap-x-24 py-10 md:py-0 md:px-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="left w-full md:max-w-[500px] pt-20 pb-10 px-7 text-center md:text-start md:px-0 md:py-0">
        <h1
          className={`text-2xl md:text-5xl font-inter font-bold text-center md:text-start bg-gradient-to-tl from-purple-500 to-blue-500 text-transparent bg-clip-text leading-snug tracking-wide transform transition-transform duration-500 ease-in-out`}
          data-aos="fade-right"
        >
          Unleash Your Productivity with AI
        </h1>
        <p
          className="text-base font-poppins py-6 md:text-lg text-slate-400"
          data-aos="fade-up"
        >
          NeuroBoost helps you write, organize, and automate your tech workflow
          effortlessly.
        </p>
        <button
          className="px-4 py-2 md:px-6 md:py-3 bg-sky-400 text-white font-semibold rounded-md shadow-lg hover:bg-sky-500 hover:scale-105 active:scale-105 transition transform duration-300 cursor-pointer text-sm md:text-base"
          data-aos="fade-left"
        >
          Join the Waitlist
        </button>
      </div>
      <div
        className="right flex items-center justify-center min-w-[300px] w-1/2 md:w-1/3 px-7 md:px-0"
        data-aos="fade-up"
      >
        <img src={heroSvg} alt="Vibe Coding" className="" />
      </div>
    </div>
  );
};

export default HeroSection;
