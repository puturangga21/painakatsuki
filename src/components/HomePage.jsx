import React from "react";
import Navbar from "./Navbar";
import RecentMovies from "./movie/RecentMovies";

const HomePage = () => {
   return (
      <>
         <Navbar />

         <div className="mx-4 h-[200px] overflow-hidden rounded-lg shadow-lg brightness-75 md:container md:w-full lg:h-[400px]">
            <div className="h-full w-full bg-[url('/assets/img/banner2.jpg')] bg-contain bg-fixed bg-center lg:bg-cover"></div>
         </div>

         <RecentMovies />
      </>
   );
};

export default HomePage;
