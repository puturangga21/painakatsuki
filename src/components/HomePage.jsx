import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import RecentMovies from "./movie/RecentMovies";

const HomePage = () => {
   return (
      <>
         <Navbar />

         <div className="container w-full h-[400px] overflow-hidden rounded-lg shadow-lg brightness-75">
            <div className="bg-[url('/assets/img/banner2.jpg')] w-[1536px] h-[800px] bg-center bg-cover bg-fixed"></div>
         </div>

         <RecentMovies />
      </>
   );
};

export default HomePage;
