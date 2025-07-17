import Dining from "../assets/Dining.png";
import living_room from "../assets/living_room.png";
import Bedroom from "../assets/Bedroom.png";

const YourRange = () => {
  return (
    <div className="w-full p-10 md:px-32 md:py-14 border-b border-slate-300">
      <h2 className="font-bold md:font-semibold text-xl md:text-3xl text-center pb-2 md:pb-4">
        Browse The Range
      </h2>
      <p className="text-center text-slate-600 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="images flex flex-col md:flex-row items-center gap-4 justify-between w-full pt-8 md:pt-14">
        <div className="dining">
          <img
            src={Dining}
            alt="Dining room"
            className="shadow-md rounded-xl"
          />
          <span className="text-center w-full inline-block pb-2 pt-4 md:py-4 font-bold md:font-semibold text-sm md:text-base">
            Dining
          </span>
        </div>
        <div className="living_room">
          <img
            src={living_room}
            alt="Living room"
            className="shadow-md rounded-xl"
          />
          <span className="text-center w-full inline-block pb-2 pt-4 md:py-4 font-bold md:font-semibold text-sm md:text-base">
            Living
          </span>
        </div>
        <div className="bedroom">
          <img src={Bedroom} alt="Bedroom" className="shadow-md rounded-xl" />
          <span className="text-center w-full inline-block pb-2 pt-4 md:py-4 font-bold md:font-semibold text-sm md:text-base">
            Bedroom
          </span>
        </div>
      </div>
    </div>
  );
};

export default YourRange;
