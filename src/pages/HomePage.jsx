import React from "react";
import Navbar from "../components/Navbar";
import RecentMovies from "./movie/RecentMovies";
import Banner from "../components/Banner";
import TopMovies from "./movie/TopMovies";
import Footer from "../components/Footer";

const HomePage = () => {
   return (
      <>
         <Navbar />
         <Banner imgUrl="./assets/img/banner2.jpg" />
         <RecentMovies />
         <TopMovies />
         <Footer />
      </>
   );
};

export default HomePage;
