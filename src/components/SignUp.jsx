"use client";
import { Button, Card, Divider, Input, Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  const handleEmailSignUp = (event) => {
    // Handle email signup logic
    event.preventDefault();
    // Add your logic here for email signup
  };

  const handleGoogleSignUp = () => {
    // Handle Google signup logic
    // Add your logic here for Google signup
  };
  return (
    <div className="my-5">
      <Card className="text-center p-6 gap-5">
        <h2 className="text-primary text-3xl font-semibold">Sign Up</h2>

        {/* Email/Password signup */}
        <form onSubmit={handleEmailSignUp} className="flex flex-col gap-4">
          <Input label="Full Name" name="fullName" required />
          <Input type="email" label="Email" name="email" required />
          <Input
            type="password"
            label="Password"
            name="password"
            required
            className="mb-2"
          />
          <Button type="submit" className="hover:bg-primary">
            Sign Up with Email
          </Button>
        </form>

        {/* Google signup */}
      </Card>
      <Divider className="my-5" />
      <div
        onClick={handleGoogleSignUp}
        className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold p-3 rounded-xl hover:cursor-pointer hover:bg-zinc-300"
      >
        <Image
          className="object-contain"
          src={"/google.png"}
          width={25}
          height={25}
          alt="google"
        />
        <span>Sign Up with Google</span>
      </div>
    </div>
  );
};

export default SignUp;
