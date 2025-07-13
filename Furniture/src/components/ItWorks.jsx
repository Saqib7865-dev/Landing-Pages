import purchaseSecurely from "../assets/Purchase_Securely.png";
import ShipFromWareHouse from "../assets/Ships_From_Warehouse.png";
import StyleYourRoom from "../assets/StyleYourRoom.png";
const ItWorks = () => {
  return (
    <div className="w-full px-32 py-14">
      <h2 className="font-semibold text-3xl text-center pb-4">
        How It Works
      </h2>
      <p className="text-center text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="images flex items-center justify-between w-full pt-14">
        <div className="dining">
          <img
            src={purchaseSecurely}
            alt="purchaseSecurely room"
            className="rounded-xl"
          />
          <div className="text-center w-full inline-block py-4">
            <h4 className="font-semibold">Purchase Securely</h4>
            <p className="text-center max-w-72 mx-auto">
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
          <div className="text-center w-full inline-block py-4">
            <h4 className="font-semibold">Ships From Warehouse</h4>
            <p className="text-center max-w-72 mx-auto">
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
          <div className="text-center w-full inline-block py-4">
            <h4 className="font-semibold">Style Your Room</h4>
            <p className="text-center max-w-72 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItWorks;
