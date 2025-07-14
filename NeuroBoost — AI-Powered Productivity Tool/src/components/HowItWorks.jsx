import userplus from "../assets/user.png";
import dashboard from "../assets/dashboard.svg";
import brain from "../assets/brain.png";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] py-16 px-24">
      <h2 className="font-inter font-bold text-center text-4xl text-white tracking-wider">
        How It Works?
      </h2>
      <div className="steps-container pt-20 grid grid-cols-3 gap-x-8">
        <div className="card bg-[#0f172a] p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-x-4">
          <img
            src={userplus}
            alt="User Plus"
            className="w-10 h-10 invert mb-4"
          />
          <h2 className="text-xl font-semibold text-white mb-2  font-poppins">
            Create your free account to access NeuroBoost.
          </h2>
        </div>
        <div className="card bg-[#0f172a] p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-x-4">
          <img src={dashboard} alt="Dashboard svg" className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2 font-poppins">
            Connect your tools and configure your AI preferences.
          </h2>
        </div>
        <div className="card bg-[#0f172a] p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-x-4">
          <img src={brain} alt="Brain svg" className="w-10 h-10 invert mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2 font-poppins">
            Generate tasks, summaries, and code — all in one place.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
