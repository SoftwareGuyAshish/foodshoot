import React from "react";
import FoodCard from "../FoodCard";

const Listing = () => {
  return (
    <div className="p-4 mx-2">
      <div className="flex flex-col items-center md:flex-row justify-center mt-5 mb-3 gap-3">
        <h2 className="font-light text-4xl text-gray-200">Check Out</h2>
        <h2 className="font-semibold text-4xl text-primary"> Our Menu!</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default Listing;
