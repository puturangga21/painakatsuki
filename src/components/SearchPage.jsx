import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const SearchPage = () => {
   const animeBaseUrl = "https://gogoanime-api-production-6a4f.up.railway.app";
   const [itemSearch, setItemSearch] = useState([]);
   const [visible, setVisible] = useState(6);

   const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 6);
   };

   const search = (keyword) => {
      if (keyword.length > 3) {
         axios.get(`${animeBaseUrl}/search?keyw=${keyword}`).then((res) => {
            setItemSearch(res.data);
            // console.log(res.data);
         });
      }
   };

   return (
      <>
         <Navbar />

         <div className="mx-4 h-[200px] overflow-hidden rounded-lg shadow-lg brightness-75 md:container md:w-full lg:h-[400px]">
            <div className="h-full w-full bg-[url('/assets/img/banner2.jpg')] bg-contain bg-fixed bg-center lg:bg-cover"></div>
         </div>

         <div className="container my-5">
            <input
               onChange={({ target }) => search(target.value)}
               placeholder="Search Movie Here ..."
               className="h-10 w-full rounded-md bg-slate-300 px-4 shadow-lg placeholder:text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
         </div>

         <div className="mx-4 my-5 md:container">
            <div className="flex items-center justify-between">
               <h3 className="text-lg font-semibold text-white lg:text-xl">Recent Release</h3>
               <button
                  className="h-[30px] w-[80px] rounded-md bg-sky-600 text-base font-semibold text-white transition-all hover:bg-sky-900 lg:h-[40px] lg:w-[100px]"
                  onClick={showMoreItems}>
                  More
               </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 md:gap-6">
               {itemSearch.slice(0, visible).map((res, i) => {
                  return (
                     <div
                        className="cards relative h-[270px] w-[165px] overflow-hidden rounded-lg bg-sky-950 shadow-lg md:h-[330px] md:w-[235px]"
                        key={i}>
                        <img src={res.animeImg} alt="Poster" className="h-full w-full object-cover" />
                        <div className="cards-body absolute top-0 flex h-full w-full rounded-lg backdrop-blur">
                           <div className="absolute bottom-0 m-4 flex flex-col gap-2">
                              <h1 className="text-lg font-semibold text-white">{res.animeTitle}</h1>
                              <button className="h-[30px] w-[80px] rounded-md bg-sky-600">
                                 <a href={res.animeUrl} className="text-md font-semibold text-white">
                                    Play
                                 </a>
                              </button>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default SearchPage;
