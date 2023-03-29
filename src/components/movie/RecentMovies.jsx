import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentMovies = () => {
   const apiUrl = "https://gogoanime-api-production-6a4f.up.railway.app";
   const [recent, setRecent] = useState([]);
   const [visible, setVisible] = useState(6);

   const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 6);
   };

   useEffect(() => {
      axios.get(`${apiUrl}/recent-release`).then((res) => {
         console.log(res.data);
         setRecent(res.data);
      });
   }, []);

   return (
      <div className="container my-5">
         <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-semibold">Recent Release</h3>
            <button
               className="w-[100px] h-[40px] bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-900 transition-all"
               onClick={showMoreItems}>
               More
            </button>
         </div>

         <div className="flex items-center gap-6 flex-wrap justify-between mt-5">
            {recent.slice(0, visible).map((res, i) => {
               return (
                  <div
                     className="rounded-lg bg-sky-950 w-[235px] h-[330px] overflow-hidden relative shadow-lg cards"
                     key={i}>
                     <img src={res.animeImg} alt="Poster" className="object-cover w-full h-full" />
                     <div className="w-full h-full top-0 cards-body absolute backdrop-blur flex">
                        <div className="absolute bottom-0 m-4 flex gap-2 flex-col">
                           <h1 className="text-white text-lg font-semibold">{res.animeTitle}</h1>
                           <button className="w-[80px] h-[30px] bg-sky-600 rounded-md">
                              <a href={res.episodeUrl} className="text-md text-white font-semibold">
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
   );
};

export default RecentMovies;
