"use client";
import { Button, Card, Divider, Input, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignUp = (event) => {
    // Handle email signup logic
    event.preventDefault();
    // Check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      // Handle case where email or password is empty
      console.error("Email and password are required");
      return;
    }
    // Add your logic here for email signup
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setFullName("");
    setEmail("");
    setPassword("");
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
          <Input
            label="Full Name"
            name="fullName"
            value={fullName}
            required
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mb-2"
          />
          <Button type="submit" className="bg-primary hover:!opacity-75">
            Sign Up with Email
          </Button>
          <span>
            Already have an account?,{" "}
            <Link href={"/signin"} className="text-primary">
              Sign In Page
            </Link>
          </span>
        </form>

        {/* Google signup */}
      </Card>
      <Divider className="my-5" />
      <div
        onClick={handleGoogleSignUp}
        className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold p-3 rounded-xl hover:cursor-pointer hover:opacity-75"
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
