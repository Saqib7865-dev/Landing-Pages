import purchaseSecurely from "../assets/Purchase_Securely.png";
import ShipFromWareHouse from "../assets/Ships_From_Warehouse.png";
import StyleYourRoom from "../assets/StyleYourRoom.png";
const ItWorks = () => {
  return (
    <div className="w-full p-10 md:px-32 md:py-14">
      <h2 className="font-bold md:font-semibold text-xl md:text-3xl text-center pb-2">
        How It Works
      </h2>
      <p className="text-center text-slate-600 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="images flex flex-col md:flex-row items-center justify-between gap-4 w-full pt-8 md:pt-14">
        <div className="dining">
          <img
            src={purchaseSecurely}
            alt="purchaseSecurely room"
            className="rounded-xl"
          />
          <div className="text-center w-full inline-block py-2 md:py-4">
            <h4 className="font-bold md:font-semibold text-sm md:text-base mb-1">
              Purchase Securely
            </h4>
            <p className="text-center max-w-72 mx-auto text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="living_room">
          <img
            src={ShipFromWareHouse}
            alt="Ship From Ware House"
            className="rounded-xl"
          />
          <div className="text-center w-full inline-block py-2 md:py-4">
            <h4 className="font-bold md:font-semibold text-sm md:text-base mb-1">
              Ships From Warehouse
            </h4>
            <p className="text-center max-w-72 mx-auto text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="bedroom">
          <img
            src={StyleYourRoom}
            alt="Style Your Room"
            className="rounded-xl"
          />
          <div className="text-center w-full inline-block py-2 md:py-4">
            <h4 className="font-bold md:font-semibold text-sm md:text-base mb-1">
              Style Your Room
            </h4>
            <p className="text-center max-w-72 mx-auto text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItWorks;
