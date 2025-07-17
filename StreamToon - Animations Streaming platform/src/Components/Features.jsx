const Features = () => {
  return (
    <section id="features" className="pt-10 md:pt-20 pb-0 px-5 md:px-10 w-full">
      <h2 className="text-2xl md:text-5xl uppercase font-semibold font-mono text-amber-600">
        About StreamToon
      </h2>
      <div className="features-container py-5 md:py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        <div className="f1 py-5 md:py-10 px-3 md:px-6 bg-gradient-to-br from-amber-600 to-indigo-600 rounded shadow transition duration-300 ease-in-out transform hover:scale-105">
          <h4 className="text-white font-bold font-mono text-lg md:text-2xl">
            HD/4K Streaming Quality
          </h4>
        </div>
        <div className="f1 py-5 md:py-10 px-3 md:px-6 bg-gradient-to-br from-amber-600 to-indigo-600 rounded shadow transition duration-300 ease-in-out transform hover:scale-105">
          <h4 className="text-white font-bold font-mono text-lg md:text-2xl">
            Offline Downloads
          </h4>
        </div>
        <div className="f1 py-5 md:py-10 px-3 md:px-6 bg-gradient-to-br from-amber-600 to-indigo-600 rounded shadow transition duration-300 ease-in-out transform hover:scale-105">
          <h4 className="text-white font-bold font-mono text-lg md:text-2xl">
            Multi-device Access
          </h4>
        </div>
        <div className="f1 py-5 md:py-10 px-3 md:px-6 bg-gradient-to-br from-amber-600 to-indigo-600 rounded shadow transition duration-300 ease-in-out transform hover:scale-105">
          <h4 className="text-white font-bold font-mono text-lg md:text-2xl">
            Exclusive Content
          </h4>
        </div>
        <div className="f1 py-5 md:py-10 px-3 md:px-6 bg-gradient-to-br from-amber-600 to-indigo-600 rounded shadow transition duration-300 ease-in-out transform hover:scale-105">
          <h4 className="text-white font-bold font-mono text-lg md:text-2xl">
            Kid-Safe Mode
          </h4>
        </div>
        <div className="f1 py-5 md:py-10 px-3 md:px-6 bg-gradient-to-br from-amber-600 to-indigo-600 rounded shadow transition duration-300 ease-in-out transform hover:scale-105">
          <h4 className="text-white font-bold font-mono text-lg md:text-2xl">
            Multiple Language Support
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
