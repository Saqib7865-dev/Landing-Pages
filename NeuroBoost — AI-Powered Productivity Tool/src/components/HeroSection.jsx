import heroSvg from "../assets/HeroSectionSVG.svg";
const HeroSection = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center gap-x-24 px-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="left w-full max-w-[500px]">
        <h1 className="text-3xl md:text-5xl font-inter font-bold text-start bg-gradient-to-tl from-purple-500 to-blue-500 text-transparent bg-clip-text leading-snug tracking-wide">
          Unleash Your Productivity with AI
        </h1>
        <p className="text-3xl font-poppins py-6 md:text-lg text-slate-400">
          NeuroBoost helps you write, organize, and automate your tech workflow
          effortlessly.
        </p>
        <button className="px-6 py-3 bg-sky-400 text-white font-semibold rounded-md shadow-lg hover:bg-sky-500 hover:scale-105 transition transform duration-300 cursor-pointer">
          Join the Waitlist
        </button>
      </div>
      <div className="right flex items-center justify-center w-1/3">
        <img src={heroSvg} alt="Vibe Coding" className="" />
      </div>
    </div>
  );
};

export default HeroSection;
