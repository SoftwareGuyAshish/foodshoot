"use client";
import { Card, Spacer } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <div className="p-1 md:p-4 mx-2">
      <Spacer y={2} />
      <Card className="p-4 ">
        <h2 className="text-primary font-semibold text-3xl underline my-2 text-center">
          About Us
        </h2>
        <div className="flex flex-col gap-3 md:px-4 md:mx-3 my-2 italic font-normal text-lg md:text-justify">
          <p>
            Welcome to FoodShoot, where we bring the joy of delicious meals
            right to your doorstep.
          </p>
          <p>
            Our mission is to simplify the food ordering process and make it
            convenient for you to explore a variety of cuisines from the comfort
            of your home.
          </p>
          <p>
            Are you tired of the hassle of deciding what to cook every day? Or
            do you simply crave restaurant-quality food without the effort of
            dining out? FoodShoot is the solution.
          </p>
          <p>
            With our user-friendly app, you can easily browse through a diverse
            menu, place your order, and enjoy a hassle-free dining experience.
            We focus on providing a seamless and enjoyable service, ensuring
            that you get exactly what you want, when you want it.
          </p>
          <p>
            Join FoodShoot today and let us take care of your cravings. Good
            food, delivered to your doorstep, just a click away!
          </p>
        </div>
      </Card>
      <Spacer y={2} />
    </div>
  );
};

export default About;
