import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useStore } from "../store/stoore";

const BannerHome = () => {
  const {bannerData,imageURL}=useStore(state=>state)
  console.log("bannerData,imageURL",bannerData,imageURL);
  

  const [currrentImg, setCurrrentImg] = useState(0);

  const handlePreviousBanner = () => {
    if (currrentImg < 0) {
      setCurrrentImg(bannerData.length);
    }
    setCurrrentImg((prev) => prev - 1);
  };
  const handleNextBanner = () => {
    if (currrentImg > bannerData.length) {
      setCurrrentImg(0);
    }
    setCurrrentImg((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currrentImg < bannerData.length - 1) {
        handleNextBanner();
      } else {
        setCurrrentImg(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL, currrentImg]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((item, index) => (
          <div
            key={item.id + "bannerHome" + index}
            style={{ transform: `translateX(-${currrentImg * 100}%)` }}
            className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
          >
            {/*  banner img*/}
            <div className="h-full w-full">
              <img
                src={imageURL + item.backdrop_path}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            {/* banner buttons */}
            <div className=" absolute w-full h-full top-0 z-20 hidden lg:flex items-center justify-between px-4 ">
              <button
                className="p-1.5 bg-white rounded-full z-10 text-black mx-2  active:scale-110"
                onClick={handlePreviousBanner}
              >
                <FaAngleLeft />
              </button>
              <button className="p-1.5 bg-white rounded-full z-10 text-black mx-2 active:scale-110">
                <FaAngleRight onClick={handleNextBanner} />
              </button>
            </div>
            {/* banner shadow */}
            <div className="w-full h-full top-0 absolute bg-gradient-to-t from-neutral-800 to-transparent"></div>
            {/* banner detail text */}
              <div className=" w-full absolute bottom-0 max-w-md px-3 m-4 my-6 ">
                <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                  {item?.title || item?.name}
                </h2>
                <p className="text-ellipsis line-clamp-3 my-2 ">
                  {item.overview}
                </p>
                <div className="flex items-center gap-4">
                  <p>Rating : {Number(item.vote_average).toFixed(1)}+</p>
                  <span>|</span>
                  <p>View : {Number(item.popularity).toFixed(0)}</p>
                </div>
                  <button className=" relative bg-white px-4 py-2 text-black font-bold rounded mt-4 z-50 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Play Now
                  </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
