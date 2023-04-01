import React from "react";
import Navbar from "../components/Navbar";
import RecentMovies from "./movie/RecentMovies";
import Banner from "../components/Banner";

const HomePage = () => {
   return (
      <>
         <Navbar />
         <Banner imgUrl="./assets/img/banner2.jpg" />
         <RecentMovies />
      </>
   );
};

export default HomePage;
