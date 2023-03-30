import React from "react";

const Navbar = () => {
   return (
      <nav className="mx-4 my-6 flex items-center justify-between lg:container">
         <div className="flex items-center gap-2">
            <img src={"/assets/img/logo.png"} alt="Logo" className="w-16" />
            <h2 className="text-lg font-bold text-white lg:text-3xl">PainAkatsuki</h2>
         </div>

         <div className="hidden items-center gap-8 md:flex">
            <ul className="flex gap-8 text-lg font-medium text-white">
               <li>
                  <a href="/action" className="transition-all hover:text-slate-600">
                     Action
                  </a>
               </li>
               <li>
                  <a href="/comedy" className="transition-all hover:text-slate-600">
                     Comedy
                  </a>
               </li>
               <li>
                  <a href="/sol" className="transition-all hover:text-slate-600">
                     Slice of Life
                  </a>
               </li>
            </ul>

            <div className="flex gap-4">
               <button className="h-[40px] w-[120px] rounded-md border-2 border-sky-600 bg-transparent font-semibold text-white transition-all hover:border-sky-900 hover:bg-sky-900">
                  <a href="/register">Register</a>
               </button>
               <button className="h-[40px] w-[100px] rounded-md bg-sky-600 font-semibold text-white transition-all hover:bg-sky-900">
                  <a href="/login">Login</a>
               </button>
            </div>
         </div>

         <div className="flex md:hidden">
            <img src={"/assets/img/menu.png"} alt="Icon" className="w-6" />
         </div>
      </nav>
   );
};

export default Navbar;
