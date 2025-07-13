import Dining from "../assets/Dining.png";
import living_room from "../assets/living_room.png";
import Bedroom from "../assets/Bedroom.png";

const YourRange = () => {
  return (
    <div className="w-full px-32 py-14 border-b border-slate-300">
      <h2 className="font-semibold text-3xl text-center pb-4">
        Browse The Range
      </h2>
      <p className="text-center text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="images flex items-center justify-between w-full pt-14">
        <div className="dining">
          <img src={Dining} alt="Dining room" className="shadow-md rounded-xl" />
          <span className="text-center w-full inline-block py-4 font-semibold">Dining</span>
        </div>
        <div className="living_room">
          <img src={living_room} alt="Living room"  className="shadow-md rounded-xl"/>
          <span className="text-center w-full inline-block py-4 font-semibold">Living</span>
        </div>
        <div className="bedroom">
          <img src={Bedroom} alt="Bedroom" className="shadow-md rounded-xl" />
          <span className="text-center w-full inline-block py-4 font-semibold">Bedroom</span>
        </div>
      </div>
    </div>
  );
};

export default YourRange;
