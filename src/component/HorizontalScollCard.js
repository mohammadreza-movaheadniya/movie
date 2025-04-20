import { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScollCard = ({ data, heading, trending,media_type }) => {
  const containerRef = useRef();

  const handelePreveios = () => {
    containerRef.current.scrollLeft -= 300;
  };
  const handeleNext = () => {
    containerRef.current.scrollLeft += 300;
  };
  return (
    <div className="container mx-auto px-5 my-10">
      {/* title header */}
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>
      {/* card img item */}
      <div className="relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden z-10 overflow-x-scroll relative scroll-smooth transition-all scrolbar-none"
        >
          {data.map((item, index) => (
            <Card data={item} trending={trending} index={index + 1} media_type={media_type} />
          ))}
        </div>

        <div className="absolute top-0 w-full h-full hidden lg:flex justify-between items-center">
          <button
            className="bg-white text-[18px] text-black rounded-full p-0.5 active:scale-125 -ml-2 z-10"
            onClick={handelePreveios}
          >
            <FaAngleLeft />
          </button>
          <button
            className="bg-white text-[18px] text-black rounded-full p-0.5 active:scale-125 -mr-2 z-10"
            onClick={handeleNext}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScollCard;
