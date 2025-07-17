import React from "react";

const ThisMonth = () => {
  return (
    <section
      id="special"
      className={`px-5 sm:px-10 w-full h-screen flex relative bg-[url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f0001d0a770784d6462e8e127904b5e8dd1a280d-3440x1020.jpg?auto=format&fit=fill&q=80&h=800)] bg-black/30 bg-blend-darken bg-center`}
    >
      <div className="w-full h-full relative">
        <div className="absolute sm:w-1/2 h-full justify-center flex flex-col md:left-10 gap-y-3">
          <h2 className="text-white text-2xl uppercase font-semibold font-mono">
            This Month Special
          </h2>
          <p className="text-6xl text-white font-bold font-mono mb-3 sm:md-1">
            ACT IV
          </p>
          <button className="relative text-white p-2 border rounded w-fit cursor-pointer font-mono overflow-hidden group">
            <span className="relative z-10">Watch Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThisMonth;
