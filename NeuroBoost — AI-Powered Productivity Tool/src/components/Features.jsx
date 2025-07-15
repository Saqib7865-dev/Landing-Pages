import checkSquare from "../assets/square-check.svg";
import txtFile from "../assets/txt-file.svg";
import code from "../assets/code.svg";
import Aos from "aos";
import { useEffect } from "react";
const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#1e1b4b] py-10 md:py-20 px-6 md:px-24">
      <h2
        className="font-inter font-bold text-center text-2xl md:text-4xl text-white tracking-wider"
        data-aos="fade-up"
      >
        Application Features
      </h2>
      <div className="card-container pt-10 md:pt-20 grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-y-0">
        <div
          className="card bg-[#1e293b] rounded md:rounded-xl p-3 md:p-6 shadow-lg transition"
          data-aos="fade-up"
        >
          <div className="header flex items-center gap-x-2">
            <img
              src={checkSquare}
              alt="Check Square svg"
              className="w-8 h-8 md:w-10 md:h-10 invert"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 tracking-wide font-poppins">
              AI-Powered Task Manager
            </h3>
          </div>
          <p className="text-slate-300 text-sm text-justify leading-relaxed pt-2 md:pt-4 tracking-wide font-poppins">
            Organize your workflow with smart suggestions, automatic
            categorization, and reminders.
          </p>
        </div>
        <div
          className="card bg-[#1e293b] rounded md:rounded-xl p-3 md:p-6 shadow-lg transition"
          data-aos="fade-up"
        >
          <div className="header flex items-center gap-x-2">
            <img
              src={code}
              alt="Code svg"
              className="w-8 h-8 md:w-10 md:h-10 invert"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 tracking-wide font-poppins">
              Smart Code Generator
            </h3>
          </div>
          <p className="text-slate-300 text-sm text-justify leading-relaxed pt-2 md:pt-4 tracking-wide font-poppins">
            Generate boilerplate, snippets, and bug fixes instantly with
            AI-powered suggestions.
          </p>
        </div>
        <div
          className="card bg-[#1e293b] rounded md:rounded-xl p-3 md:p-6 shadow-lg transition"
          data-aos="fade-up"
        >
          <div className="header flex items-center gap-x-2">
            <img
              src={txtFile}
              alt="Text File svg"
              className="w-8 h-8 md:w-10 md:h-10 invert"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 tracking-wide font-poppins">
              Document Summarizer
            </h3>
          </div>
          <p className="text-slate-300 text-sm text-justify leading-relaxed pt-2 md:pt-4 tracking-wide font-poppins">
            Summarize long technical documents, notes, or meeting transcripts
            into key insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
