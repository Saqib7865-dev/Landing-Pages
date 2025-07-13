import { FaTruckFast } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex items-center justify-between px-32 py-5 bg-gray-200">
      <div className="div flex items-center space-x-4">
        <FaTruckFast className="text-4xl" />
        <div>
          <p className="font-semibold">Free Delivery</p>
          <p className="font-light">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="div flex items-center space-x-3">
        {/* <Md24Mp className="text-4xl" /> */}
        <div>
          <p className="font-semibold">Support 24/7</p>
          <p className="font-light">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="div flex items-center space-x-3">
        {/* <SiFsecure className="text-4xl" /> */}
        <div>
          <p className="font-semibold">100% Authentic</p>
          <p className="font-light">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
