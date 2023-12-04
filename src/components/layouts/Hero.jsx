import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 p-2 m-2">
      {/* Text Section */}
      <div className="md:p-1 md:m-1 col-span-4 md:col-span-2">
        <h2 className="text-4xl font-semibold mb-6 md:px-2 mx-2">
          Capture <br />
          the Taste <br /> with <span className="text-primary">FoodShoot</span>
          : <br /> Order Online!
        </h2>
        <p className="text-base font-light text-gray-200 mb-6 md:px-2 ml-2 md:mr-6">
          Explore a diverse menu crafted with passion. Order now for an
          experience that brings vibrant Indian tastes to your doorstep!
        </p>
        <div className="flex flex-wrap gap-4 md:p-2 m-2 items-center">
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            className="uppercase"
            endContent={<IoArrowForwardCircleOutline />}
          >
            Order Now
          </Button>
          <Button
            color="primary"
            variant="bordered"
            size="lg"
            endContent={<IoArrowForwardCircleOutline />}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="relative hidden md:block col-span-2 min-h-[400px]">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          className="object-contain "
          alt={"pizza"}
        />
      </div>
    </div>
  );
};

export default Hero;
