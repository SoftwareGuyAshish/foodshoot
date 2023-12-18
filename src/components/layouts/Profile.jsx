"use client";
import { Avatar } from "@nextui-org/react";
import React from "react";
import { FaCamera } from "react-icons/fa";
import UserCard from "../UserCard";

const Profile = () => {
  const user = {
    fullName: "Ashish Prakash",
    email: "ashish@test.com",
    avatar:
      "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600",
    addresses: [],
    orders: [],
    cart: [],
  };
  return (
    <div className="md:w-3/4 mx-auto p-4">
      <h1 className="text-primary text-3xl my-2 text-center font-semibold">
        Profile
      </h1>
      {/* User Card*/}
      <UserCard user={user} />
    </div>
  );
};

export default Profile;
