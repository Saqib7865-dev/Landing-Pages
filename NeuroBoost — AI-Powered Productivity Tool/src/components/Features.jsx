import checkSquare from "../assets/square-check.svg";
import txtFile from "../assets/txt-file.svg";
import code from "../assets/code.svg";
const Features = () => {
  return (
    <div className="bg-[#1e1b4b] py-20 px-24">
      <h2 className="font-inter font-bold text-center text-4xl text-white tracking-wider">
        Application Features
      </h2>
      <div className="card-container pt-20 grid grid-cols-3 gap-x-8">
        <div className="card bg-[#1e293b] rounded-xl p-6 shadow-lg transition">
          <div className="header flex items-center gap-x-2">
            <img
              src={checkSquare}
              alt="Check Square svg"
              className="w-10 h-10 invert"
            />
            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide font-poppins">
              AI-Powered Task Manager
            </h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed pt-4 tracking-wide  font-poppins">
            Organize your workflow with smart suggestions, automatic
            categorization, and reminders.
          </p>
        </div>
        <div className="card bg-[#1e293b] rounded-xl p-6 shadow-lg transition">
          <div className="header flex items-center gap-x-2">
            <img src={code} alt="Code svg" className="w-10 h-10 invert" />
            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide  font-poppins">
              Smart Code Generator
            </h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed pt-4 tracking-wide  font-poppins">
            Generate boilerplate, snippets, and bug fixes instantly with
            AI-powered suggestions.
          </p>
        </div>
        <div className="card bg-[#1e293b] rounded-xl p-6 shadow-lg transition">
          <div className="header flex items-center gap-x-2">
            <img
              src={txtFile}
              alt="Text File svg"
              className="w-10 h-10 invert"
            />
            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide font-poppins">
              Document Summarizer
            </h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed pt-4 tracking-wide font-poppins">
            Summarize long technical documents, notes, or meeting transcripts
            into key insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
