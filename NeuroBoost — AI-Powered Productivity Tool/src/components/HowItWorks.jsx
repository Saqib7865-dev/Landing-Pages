import userplus from "../assets/user.png";
import dashboard from "../assets/dashboard.svg";
import brain from "../assets/brain.png";
import Aos from "aos";
import { useEffect } from "react";
const HowItWorks = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] py-10 px-6 md:py-16 md:px-24">
      <h2
        className="font-inter font-bold text-center text-2xl md:text-4xl text-white tracking-wider"
        data-aos="fade-up"
      >
        How It Works?
      </h2>
      <div className="steps-container pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-8">
        <div
          data-aos="fade-up"
          className="card bg-[#0f172a] p-3 md:p-6 rounded md:rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-x-4"
        >
          <img
            src={userplus}
            alt="User Plus"
            className="w-8 h-8 md:w-10 md:h-10 invert"
          />
          <h2 className="text-sm md:text-xl text-white mb-2 font-poppins">
            Create your free account to access NeuroBoost.
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="card bg-[#0f172a] p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-x-4"
        >
          <img
            src={dashboard}
            alt="Dashboard svg"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h2 className="text-sm md:text-xl text-white mb-2 font-poppins">
            Connect your tools and configure your AI preferences.
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="card bg-[#0f172a] p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-x-4"
        >
          <img
            src={brain}
            alt="Brain svg"
            className="w-8 h-8 md:w-10 md:h-10 invert"
          />
          <h2 className="text-sm md:text-xl text-white mb-2 font-poppins">
            Generate tasks, summaries, and code — all in one place.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
