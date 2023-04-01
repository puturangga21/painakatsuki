import React from "react";

const Banner = (props) => {
   return (
      <div className="mx-4 h-[200px] overflow-hidden rounded-lg shadow-lg brightness-75 md:container md:w-full lg:h-[400px]">
         <img src={props.imgUrl} alt="Banner" className="object-cover" />
      </div>
   );
};

export default Banner;
