import React from "react";

const Nav = () => {
  return (
    <div className="bg-slate-800 w-full flex justify-center items-center drop-shadow-md px-3 py-2 text-slate-100 text-base mb-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current w-6"
      >
        <path d="M 25 1.9003906 C 12.259016 1.9003906 1.9003906 12.259016 1.9003906 25 C 1.9003906 37.731822 12.244263 48.084726 24.972656 48.099609 C 24.981816 48.09962 24.990838 48.099609 25 48.099609 C 37.740984 48.099609 48.099609 37.740984 48.099609 25 C 48.099609 12.268178 37.755737 1.9152743 25.027344 1.9003906 C 25.023418 1.900386 25.019551 1.9003932 25.015625 1.9003906 A 1.0001 1.0001 0 0 0 25 1.9003906 z M 24 4.0175781 L 24 13.941406 C 21.450132 13.878718 19.021446 13.582326 16.775391 13.117188 C 17.16746 11.924626 17.612632 10.816116 18.107422 9.8203125 C 19.75188 6.5107099 21.839007 4.4968954 24 4.0175781 z M 26 4.0175781 C 28.160993 4.4968954 30.24812 6.5107099 31.892578 9.8203125 C 32.394449 10.830367 32.844182 11.957701 33.240234 13.169922 C 30.995485 13.612886 28.558321 13.887502 26 13.945312 L 26 4.0175781 z M 19.240234 4.7011719 C 18.133059 5.8351241 17.145295 7.2614834 16.316406 8.9296875 C 15.751596 10.066413 15.255021 11.319876 14.822266 12.65625 C 12.844191 12.127566 11.061211 11.457558 9.53125 10.679688 C 12.126983 7.8768943 15.45986 5.7706664 19.240234 4.7011719 z M 30.757812 4.7011719 C 34.564029 5.7776084 37.91622 7.9050428 40.519531 10.736328 C 39.006778 11.534023 37.211395 12.206672 35.199219 12.726562 C 34.761471 11.364017 34.258123 10.085973 33.683594 8.9296875 C 32.854468 7.261007 31.865382 5.8352283 30.757812 4.7011719 z M 8.2148438 12.246094 C 9.9711662 13.187451 12.007892 13.979485 14.263672 14.585938 C 13.527729 17.438814 13.098132 20.624991 13.025391 24 L 3.9257812 24 C 4.1315578 19.586527 5.7068361 15.542443 8.2148438 12.246094 z M 41.824219 12.298828 C 44.309015 15.58576 45.869529 19.609826 46.074219 24 L 36.974609 24 C 36.902489 20.653788 36.478507 17.494335 35.753906 14.660156 C 38.032249 14.066652 40.077796 13.27351 41.824219 12.298828 z M 16.214844 15.050781 C 18.640961 15.562195 21.255215 15.880419 24 15.943359 L 24 24 L 15.025391 24 C 15.099396 20.77382 15.520048 17.736695 16.214844 15.050781 z M 33.798828 15.107422 C 34.48516 17.779626 34.901114 20.79608 34.974609 24 L 26 24 L 26 15.947266 C 28.74888 15.889931 31.369811 15.596054 33.798828 15.107422 z M 3.9257812 26 L 13.025391 26 C 13.097511 29.346212 13.521493 32.505665 14.246094 35.339844 C 11.967751 35.933348 9.9222046 36.72649 8.1757812 37.701172 C 5.690985 34.41424 4.1304715 30.390173 3.9257812 26 z M 15.025391 26 L 24 26 L 24 34.052734 C 21.25112 34.110069 18.630189 34.403946 16.201172 34.892578 C 15.51484 32.220373 15.098886 29.20392 15.025391 26 z M 26 26 L 34.974609 26 C 34.900604 29.22618 34.479952 32.263305 33.785156 34.949219 C 31.359039 34.437805 28.744785 34.119581 26 34.056641 L 26 26 z M 36.974609 26 L 46.074219 26 C 45.868442 30.413473 44.293164 34.457557 41.785156 37.753906 C 40.028834 36.812549 37.992108 36.020515 35.736328 35.414062 C 36.472271 32.561187 36.901868 29.375009 36.974609 26 z M 24 36.054688 L 24 45.982422 C 21.839007 45.503105 19.75188 43.48929 18.107422 40.179688 C 17.605551 39.169633 17.155818 38.042299 16.759766 36.830078 C 19.004515 36.387114 21.441679 36.112498 24 36.054688 z M 26 36.058594 C 28.549868 36.121282 30.978554 36.417674 33.224609 36.882812 C 32.83254 38.075374 32.387368 39.183884 31.892578 40.179688 C 30.24812 43.48929 28.160993 45.503105 26 45.982422 L 26 36.058594 z M 14.800781 37.273438 C 15.238529 38.635982 15.741877 39.914027 16.316406 41.070312 C 17.145532 42.738993 18.134618 44.164772 19.242188 45.298828 C 15.435971 44.222392 12.08378 42.094957 9.4804688 39.263672 C 10.993222 38.465977 12.788605 37.793328 14.800781 37.273438 z M 35.177734 37.34375 C 37.155809 37.872434 38.938788 38.542442 40.46875 39.320312 C 37.873017 42.123106 34.54014 44.229334 30.759766 45.298828 C 31.866941 44.164876 32.854705 42.738517 33.683594 41.070312 C 34.248404 39.933588 34.744979 38.680124 35.177734 37.34375 z"></path>
      </svg>
      <p className="text-slate-100 ml-2">my travel journal</p>
    </div>
  );
};

export default Nav;
