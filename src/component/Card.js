import React from "react";
import moment from "moment";
import { Link } from "react-router";
import { useStore } from "../store/stoore";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useStore((state) => state.imageURL);
  const mediaType = data.media_type ?? media_type;

  return (
    <Link
      to={`/${mediaType}/${data.id}`}
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all "
    >
      {data.poster_path ? (
        <img src={imageURL + data.poster_path} alt="" className="" />
      ) : (
        <div className="bg-neutral-800 h-full w-full flex justify-center items-center">
          No image found
        </div>
      )}
      <div className="absolute top-4 ">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>

      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
          {data.vote_average && (
            <p className="bg-black px-1 rounded-full text-xs text-white">
              {data.vote_average !== 0 && (
                <> Rating :{Number(data.vote_average).toFixed(1)}</>
              )}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
export default Card;
