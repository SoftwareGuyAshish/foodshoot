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

const FoodCard = () => {
  return (
    <Card className="py-2 my-1 px-2 md:px-0 col-span-1 hover:bg-black hover:shadow-shadowPrimary hover:scale-[1.01]">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">KFC</p>
        <div className="flex justify-between w-full">
          <h4 className="font-bold text-large">Vanilla Pie</h4>
          <div className="flex items-center justify-center text-yellow-400 gap-1">
            <IoStar />
            <span className="mt-1">4.2</span>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg"
          // width={270}
        />
      </CardBody>
      <CardFooter className="justify-between">
        <div>
          <p className="text-base text-white font-semibold">Rs. 539</p>
        </div>
        <Button className="text-base" color="primary" radius="full" size="md">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
