import inspiration1 from "../assets/Inspiration1.png";
import inspiration2 from "../assets/Inspiration2.png";
import inspiration3 from "../assets/Inspiration3.png";
const Inspirations = () => {
  return (
    <div className="w-full px-32 py-14">
      <h4 className="w-full text-center font-bold text-3xl">
        Inspiration Collection
      </h4>
      <p className="text-center py-4 text-slate-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="images flex items-center justify-center space-x-8 w-full pt-20">
        <img
          src={inspiration1}
          alt="Inspiration 1"
          className="shadow-lg rounded-tl-[4rem]"
        />
        <img
          src={inspiration2}
          alt="Inspiration 2"
          className="shadow-lg -translate-y-10"
        />
        <img src={inspiration3} alt="Inspiration 3" className="shadow-md rounded-br-[5rem]" />
      </div>
    </div>
  );
};

export default Inspirations;
