import { FaTruckFast } from "react-icons/fa6";
import { Md24Mp } from "react-icons/md";
import { SiFsecure } from "react-icons/si";

const Features = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6 p-10 md:px-32 md:py-5 bg-gray-200">
      <div className="div flex items-center space-x-4">
        <FaTruckFast className="text-4xl" />
        <div>
          <p className="font-bold md:font-semibold">Free Delivery</p>
          <p className="font-light">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="div flex items-center space-x-3">
        <Md24Mp className="text-4xl" />
        <div>
          <p className="font-bold md:font-semibold">Support 24/7</p>
          <p className="font-light">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="div flex items-center space-x-3">
        <SiFsecure className="text-4xl" />
        <div>
          <p className="font-bold md:font-semibold">100% Authentic</p>
          <p className="font-light">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
