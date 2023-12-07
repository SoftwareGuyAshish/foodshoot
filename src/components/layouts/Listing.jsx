import React from "react";
import FoodCard from "../FoodCard";

const Listing = () => {
  const menuItems = [
    {
      name: "Cupcake",
      photoURL:
        "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Veg Roll",
      photoURL:
        "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Donut",
      photoURL:
        "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=600",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Veg Soup",
      photoURL:
        "https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&w=600",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Brownee",
      photoURL:
        "https://images.pexels.com/photos/2955818/pexels-photo-2955818.jpeg?auto=compress&cs=tinysrgb&w=600",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Chicken Pizza",
      photoURL:
        "https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=600",
      restaurant: "FoodShoot Restaurant",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Salad",
      photoURL:
        "https://images.pexels.com/photos/4871111/pexels-photo-4871111.jpeg?auto=compress&cs=tinysrgb&w=600",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
    {
      name: "Indian Fries",
      photoURL:
        "https://images.pexels.com/photos/343873/pexels-photo-343873.jpeg?auto=compress&cs=tinysrgb&w=600",
      restaurant: "KFC",
      rating: "4.2",
      price: "320",
    },
  ];

  return (
    <div className="p-4 mx-2">
      <div className="flex flex-col items-center md:flex-row justify-center mt-5 mb-3 gap-3">
        <h2 className="font-light text-4xl text-gray-200">Check Out</h2>
        <h2 className="font-semibold text-4xl text-primary"> Our Menu!</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {menuItems.map((item, index) => (
          <FoodCard key={`${item}-${index}`} food={item} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
