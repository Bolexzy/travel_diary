import React from "react";

const Main = ({ place }) => {
  return (
    <article className="flex flex-row w-full h-2/5 sm:h-full">
      <div className="bg-slate-100 mr-6">
        <img
          src={place.imageUrl}
          alt="mount fuji"
          width={150}
          height={190}
          className="flex-none rounded-md w-72 h-60 sm:w-72 sm:h-72 drop-shadow-md hover:drop-shadow-xl"
        />
      </div>

      <div className="flex flex-col flex-initial w-4/6 h-60 space-y-2">
        <div className="">
          <h2 className="font-bold text-base sm:text-3xl tracking-wide text-grey-700">
            {place.title}
          </h2>
          <div className="flex flex-row justify-start flex-wrap sm:flex-nowrap items-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
              className="px-1"
            >
              <path
                fill="#ff3d00"
                d="M24,1C15.2,1,6.015,7.988,6,18C5.982,29.981,24,48,24,48s18.019-17.994,18-30 C41.984,8.003,32.8,1,24,1z M24,26c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S28.418,26,24,26z"
              ></path>
            </svg>
            <p className="uppercase text-xs sm:text-base tracking-wide sm:tracking-widest">
              {place.location}
            </p>
            <a
              className="underline text-slate-400 sm:ml-3 text-xs sm:text-sm cursor-pointer px-2 sm:px-0"
              href={place.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className=" text-xs sm:text-sm max-w-lg line-clamp-6 sm:line-clamp-none">
          <p className="leading-5  font-bold mb-2">
            {place.startDate} - {place.endDate}
          </p>
          <p className="text-grey-100 tracking-tight leading-1">
            {place.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Main;
