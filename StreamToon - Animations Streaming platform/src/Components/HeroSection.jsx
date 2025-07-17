import { useScrollContext } from "../Providers/ScrollContext";
import heroImg from "../assets/heroImg.avif";

const HeroSection = () => {
  const { scrollY } = useScrollContext();
  return (
    <section
      id="hero"
      className={`w-full ${
        scrollY > 70
          ? "min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-80px)]"
          : "h-screen"
      } flex flex-col md:flex-row items-center justify-around md:space-x-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white px-10 py-10 md:py-20 md:px-28 transition-all duration-700 ease-in-out`}
    >
      <div className="text-content w-full py-16 md:py-20 md:max-w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-6xl text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-mono">
          Your Next Favorite Animated Series is Here
        </h1>
        <p className="mt-2 md:mt-4 text-center md:text-left text-gray-400 md:text-lg font-serif">
          StreamToon brings you thrilling adventures, stunning animation, and
          exclusive early access — all in one place.
        </p>
        <div className="mt-6 flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="font-mono bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded md:rounded-full font-semibold shadow">
            Explore the Website
          </button>
          <button className="font-mono border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 px-6 py-3 rounded md:rounded-full font-semibold transition">
            Watch Trailer
          </button>
        </div>
      </div>
      <div className="animated-img md:max-w-1/2 text-end">
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default HeroSection;
