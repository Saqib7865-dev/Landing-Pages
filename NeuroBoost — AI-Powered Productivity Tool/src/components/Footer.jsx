import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="container bg-[#0f172a] px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16">
        <div className="section-1">
          <h4 className="text-white font-inter text-2xl font-bold tracking-wide">
            NeuroBoost
          </h4>
          <p className="text-slate-300 pt-3 text-justify font-poppins tracking-normal max-w-80">
            NeuroBoost is your AI-powered workspace assistant. Write, organize,
            and automate everything.
          </p>
        </div>
        <div className="section-2">
          <ul className="flex flex-col gap-y-2 text-white">
            <li>
              <a
                href="/"
                className="font-poppins hover:text-sky-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-poppins hover:text-sky-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-poppins hover:text-sky-400 transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-poppins hover:text-sky-400 transition duration-300"
              >
                How It Works?
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-poppins hover:text-sky-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="section-3">
          <h4 className="font-inter text-white font-bold tracking-wide text-2xl">
            Newsletter Signup
          </h4>
          <div className="pt-4">
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-white rounded-l p-2 border-none outline-none font-poppins"
            />
            <button className="bg-sky-400 text-white rounded-r p-2 hover:bg-sky-500 font-poppins">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-row text-white pb-4 flex items-center justify-around">
        <div className="flex gap-x-6 justify-center md:justify-start">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"npm
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center font-inter">
          @{new Date().getFullYear()} NeuroBoost
        </p>
      </div>
    </div>
  );
};

export default Footer;
