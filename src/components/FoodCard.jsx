import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";
import { IoStar } from "react-icons/io5";

const FoodCard = ({ food }) => {
  return (
    <Card className="py-2 my-1 px-2 md:px-0 col-span-1 hover:bg-black hover:shadow-shadowPrimary hover:scale-[1.01]">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-semibold mb-1">
          {food.restaurant}
        </p>
        <div className="flex justify-between w-full">
          <h4 className="font-bold text-large">{food.name}</h4>
          <div className="flex items-center justify-center text-yellow-400 gap-1">
            <IoStar />
            <span className="mt-1">{food.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src={food.photoURL}
          // width={270}
        />
      </CardBody>
      <CardFooter className="justify-between">
        <div>
          <p className="text-base text-white font-semibold">Rs. {food.price}</p>
        </div>
        <Button className="text-base" color="primary" radius="full" size="md">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
