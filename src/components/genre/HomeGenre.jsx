import React from "react";
import Navbar from "../Navbar";

const HomeGenre = () => {
   return (
      <>
         <Navbar />

         <div className="mx-4 h-[200px] overflow-hidden rounded-lg shadow-lg brightness-75 md:container md:w-full lg:h-[400px]">
            <div className="h-full w-full bg-[url('/assets/img/banner2.jpg')] bg-contain bg-fixed bg-center lg:bg-cover"></div>
         </div>

         <div className="container my-5 flex flex-wrap justify-between gap-4 px-4 md:gap-4 md:px-0">
            <a href="/genre-action">
               <div className="flex h-[100px] w-[170px] items-start rounded-md bg-sky-400 bg-[url('/assets/img/genre-1.png')] bg-cover bg-center transition-all hover:brightness-50 md:h-[150px] md:w-[245px] lg:h-[480px] lg:w-[760px] lg:rounded-br-[80px]">
                  <h1 className="m-4 text-xl font-bold text-white drop-shadow-xl md:text-3xl lg:m-12 lg:text-6xl">
                     Action
                  </h1>
               </div>
            </a>
            <a href="/genre-comedy">
               <div className="flex h-[100px] w-[170px] items-end justify-end rounded-md bg-sky-400 bg-[url('/assets/img/genre-2.png')] bg-cover bg-center transition-all hover:brightness-50 md:h-[150px] md:w-[245px] lg:h-[480px] lg:w-[760px] lg:rounded-tl-[60px]">
                  <h1 className="m-4 text-xl font-bold text-white drop-shadow-xl md:text-3xl lg:m-12 lg:text-6xl">
                     Comedy
                  </h1>
               </div>
            </a>
            <a href="/genre-drama">
               <div className="flex h-[100px] w-[170px] items-end justify-end rounded-md bg-sky-400 bg-[url('/assets/img/genre-3.jpg')] bg-cover bg-center transition-all hover:brightness-50 md:h-[150px] md:w-[245px] lg:h-[480px] lg:w-[760px] lg:rounded-bl-[80px]">
                  <h1 className="m-4 text-xl font-bold text-white drop-shadow-xl md:text-3xl lg:m-12 lg:text-6xl">
                     Drama
                  </h1>
               </div>
            </a>
            <a href="/genre-harem">
               <div className="flex h-[100px] w-[170px] rounded-md bg-sky-400 bg-[url('/assets/img/genre-4.jpg')] bg-cover bg-center transition-all hover:brightness-50 md:h-[150px] md:w-[245px] lg:h-[480px] lg:w-[760px] lg:rounded-tl-[60px]">
                  <h1 className="m-4 text-xl font-bold text-white drop-shadow-xl md:text-3xl lg:m-12 lg:text-6xl">
                     Harem
                  </h1>
               </div>
            </a>
            <a href="/genre-horror">
               <div className="flex h-[100px] w-[170px] items-end rounded-md bg-sky-400 bg-[url('/assets/img/genre-5.jpg')] bg-cover bg-center transition-all hover:brightness-50 md:h-[150px] md:w-[245px] lg:h-[480px] lg:w-[760px] lg:rounded-tr-[60px]">
                  <h1 className="m-4 text-xl font-bold text-white drop-shadow-xl md:text-3xl lg:m-12 lg:text-6xl">
                     Horror
                  </h1>
               </div>
            </a>
            <a href="/genre-romance">
               <div className="flex h-[100px] w-[170px] rounded-md bg-sky-400 bg-[url('/assets/img/genre-6.png')] bg-cover bg-center transition-all hover:brightness-50 md:h-[150px] md:w-[245px] lg:h-[480px] lg:w-[760px] lg:rounded-tr-[60px]">
                  <h1 className="m-4 text-xl font-bold text-white drop-shadow-xl md:text-3xl lg:m-12 lg:text-6xl">
                     Romance
                  </h1>
               </div>
            </a>
         </div>
      </>
   );
};

export default HomeGenre;
