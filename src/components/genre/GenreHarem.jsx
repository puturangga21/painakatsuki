import React from "react";
import Navbar from "../Navbar";

const GenreHarem = () => {
   return (
      <>
         <Navbar />

         <div className="mx-4 h-[200px] overflow-hidden rounded-lg shadow-lg brightness-75 md:container md:w-full lg:h-[400px]">
            <div className="h-full w-full bg-[url('/assets/img/genre-4.jpg')] bg-contain bg-fixed bg-center lg:bg-cover"></div>
         </div>

         <div className="mx-4 my-5 md:container">
            <div className="flex items-center justify-between">
               <h3 className="text-lg font-semibold text-white lg:text-xl">Recent Release</h3>
               <button className="h-[30px] w-[80px] rounded-md bg-sky-600 text-base font-semibold text-white transition-all hover:bg-sky-900 lg:h-[40px] lg:w-[100px]">
                  More
               </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 md:gap-6">
               <div className="cards relative h-[270px] w-[165px] overflow-hidden rounded-lg bg-sky-950 shadow-lg md:h-[330px] md:w-[235px]">
                  <img alt="Poster" className="h-full w-full object-cover" />
                  <div className="cards-body absolute top-0 flex h-full w-full rounded-lg backdrop-blur">
                     <div className="absolute bottom-0 m-4 flex flex-col gap-2">
                        <h1 className="text-lg font-semibold text-white"></h1>
                        <button className="h-[30px] w-[80px] rounded-md bg-sky-600">
                           <a className="text-md font-semibold text-white">Play</a>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default GenreHarem;
