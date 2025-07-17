import IG1 from "../assets/IG-1.jpg";
import IG2 from "../assets/IG-2.jpg";
import IG3 from "../assets/IG-3.jpg";
import IG4 from "../assets/IG-4.jpg";

const Footer = () => {
  return (
    <div className="p-10 md:py-14 md:px-32 bg-[#054C73] text-white">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        <div className="left">
          <h4 className="font-bold md:font-semibold text-xl md:text-2xl">
            Beauty Care
          </h4>
          <p className="text-slate-400 py-3 md:py-6 max-w-80 text-justify text-sm md:text-base">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="font-bold md:font-semibold text-xl md:text-2xl pb-5 md:pb-10">
            Follow Us
          </p>
        </div>
        <div className="right">
          <h6 className="text-lg md:text-xl font-bold md:font-semibold">
            Instagram Shop
          </h6>
          <div className="images grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4 md:pt-6">
            <img src={IG1} alt="Instargram img 1" className="shadow rounded" />
            <img src={IG2} alt="Instargram img 2" className="shadow rounded" />
            <img src={IG3} alt="Instargram img 3" className="shadow rounded" />
            <img src={IG4} alt="Instargram img 4" className="shadow rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
