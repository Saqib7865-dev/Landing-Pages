import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-amber-600 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 md:py-16">
        <div className="section-1">
          <h4 className="text-white font-mono text-2xl md:text-4xl font-bold tracking-wide uppercase">
            StreamToon
          </h4>
          <p className="text-slate-300 pt-3 text-justify font-poppins tracking-normal w-full md:max-w-80 text-sm md:text-base lg:text-lg font-serif">
            StreamToon is your ultimate destination for animated entertainment —
            delivering top-quality series with stunning visuals, immersive
            storytelling, and seamless access.
          </p>
        </div>
        <div className="section-2">
          <ul className="flex flex-col gap-y-2 text-white">
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                Latest Movies/Episodes
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                Our Special
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm md:text-base font-poppins hover:text-sky-400 transition duration-300 font-serif"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="section-3">
          <h4 className="font-inter text-white font-bold tracking-wide text-2xl font-mono">
            Newsletter Signup
          </h4>
          <div className="pt-2 md:pt-4 flex items-center flex-col md:inline-block">
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-white rounded md:rounded-none md:rounded-l p-2 border-none outline-none font-poppins mb-2 md:mb-0 w-full md:w-auto text-sm md:text-base font-mono"
            />
            <button className="bg-gradient-to-r from-amber-600 to-indigo-600 text-white rounded md:rounded-none md:rounded-r p-2 font-poppins w-full md:w-auto text-sm md:text-base font-mono">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-row text-white pb-4 flex items-center justify-around">
        <div className="flex gap-x-3 md:gap-x-6 justify-center md:justify-start">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            npm
            className="text-white transition"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition"
          >
            <Twitter className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
        <p className="text-center font-bold font-mono text-sm md:text-base">
          @{new Date().getFullYear()} STREAMTOON
        </p>
      </div>
    </div>
  );
};

export default Footer;
