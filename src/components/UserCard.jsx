import { Avatar, Button, Card, CardHeader } from "@nextui-org/react";
import React from "react";
import { FaCamera } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <Card className="py-2 my-1 px-2 md:px-0">
      <CardHeader className="pb-1 pt-2 px-4 flex flex-col md:flex-row gap-5 items-center">
        <Avatar
          isBordered
          color="primary"
          showFallback
          fallback={
            <FaCamera
              className="w-10 h-10 cursor-pointer text-default-500"
              fill="currentColor"
              size={20}
              onClick={() => {
                console.log("hello");
              }}
            />
          }
          className="w-4/5 h-4/5 md:w-1/5 md:h-1/5 text-large object-contain m-2 md:mr-3"
          src={user.avatar}
        />
        <div className="flex flex-col items-center md:items-start justify-evenly gap-1 md:gap-2">
          <h2 className="text-primary text-3xl font-bold">{user.fullName}</h2>
          <p className="text-gray-300 text-base font-light mb-2">
            {user.email}
          </p>
          <Button className="text-sm" color="primary" radius="xl" size="md">
            Edit Profile
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
