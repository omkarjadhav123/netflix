import React from "react";
import { CiPlay1, CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute top-0 left-0 w-screen aspect-video text-white bg-gradient-to-r from-black pt-[18%] px-12">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="py-6 text-lg w-1/3">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition">
          <CiPlay1 size={24} />
          <span>Play</span>
        </button>

        <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition">
          <CiCircleInfo size={24} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
