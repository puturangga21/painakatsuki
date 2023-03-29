import React from "react";

const Navbar = () => {
   return (
      <nav className="container my-6 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <img src={"/assets/img/logo.png"} alt="Logo" className="w-16" />
            <h2 className="text-white font-bold text-3xl">PainAkatsuki</h2>
         </div>

         <div className="flex items-center gap-8">
            <ul className="flex gap-8 text-white font-medium text-lg ">
               <li>
                  <a href="/action" className="hover:text-slate-600 transition-all">
                     Action
                  </a>
               </li>
               <li>
                  <a href="/comedy" className="hover:text-slate-600 transition-all">
                     Comedy
                  </a>
               </li>
               <li>
                  <a href="/sol" className="hover:text-slate-600 transition-all">
                     Slice of Life
                  </a>
               </li>
            </ul>

            <div className="flex gap-4">
               <button className="w-[120px] h-[40px] bg-transparent border-2 border-sky-600 text-white font-semibold rounded-md hover:bg-sky-900 hover:border-sky-900 transition-all">
                  <a href="/register">Register</a>
               </button>
               <button className="w-[100px] h-[40px] bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-900 transition-all">
                  <a href="/login">Login</a>
               </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
