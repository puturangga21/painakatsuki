import React from "react";

const Footer = () => {
   return (
      <footer>
         <hr className="mt-10 border-slate-800" />
         <div className="container my-11 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <img src={"/assets/img/logo.png"} alt="Logo" className="w-16" />
               <h2 className="text-lg font-bold text-white lg:text-3xl">PainAkatsuki</h2>
            </div>

            <div className="flex gap-28">
               <div className="flex flex-col justify-start text-lg font-medium text-white">
                  <h1 className="text-3xl font-bold">Categories</h1>
                  <div className="mt-5 flex flex-col gap-1">
                     <a href="/genre" className="transition-all hover:text-sky-500">
                        Browse Genre
                     </a>
                     <a href="/recent" className="transition-all hover:text-sky-500">
                        Recent Release
                     </a>
                     <a href="/top-airing" className="transition-all hover:text-sky-500">
                        Top Airing
                     </a>
                     <a href="/search-movie" className="transition-all hover:text-sky-500">
                        Search
                     </a>
                  </div>
               </div>

               <div className="flex flex-col justify-start text-lg font-medium text-white">
                  <h1 className="text-3xl font-bold">Source</h1>
                  <div className="mt-5 flex flex-col gap-1">
                     <a href="https://github.com/riimuru" className="transition-all hover:text-sky-500">
                        riimuru
                     </a>
                     <a href="https://github.com/riimuru/gogoanime-api" className="transition-all hover:text-sky-500">
                        gogoanime
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex h-[60px]  bg-[#0d1525]">
            <div className="container flex items-center justify-between">
               <div>
                  <h1 className="text-sm text-white">&#169; Kue Putu</h1>
               </div>

               <div className="flex items-center justify-center gap-2">
                  <a href="https://github.com/puturangga21">
                     <img src="../assets/img/bx-github.svg" alt="Logo" />
                  </a>
                  <a href="https://twitter.com/puturangga21">
                     <img src="../assets/img/bx-twitter.svg" alt="Logo" />
                  </a>
                  <a href="https://instagram.com/puturangga21">
                     <img src="../assets/img/bx-instagram.svg" alt="Logo" />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
