"use client";
import { Button, Card, Divider, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    //Custom Dynamic Toast
    const signInToast = () => {
      toast.info("Singing In...", {
        toastId: "signInToast",
      });
    };
    signInToast();
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response.ok) {
      router.push("/");
      console.log(response);
      toast.update("signInToast", {
        render: "Signed In Successfully",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
    } else {
      toast.update("signInToast", {
        render: "Invalid Credentials",
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google signin logic
    // Add your logic here for Google signin
  };
  return (
    <div className="my-5">
      <Card className="text-center p-6 gap-5">
        <h2 className="text-primary text-3xl font-semibold">Sign In</h2>
        {/* Email/Password signin */}
        <form onSubmit={handleEmailSignIn} className="flex flex-col gap-4">
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
            Sign In with Email
          </Button>
          <span>
            {`Don't have an account?`},{" "}
            <Link href={"/signup"} className="text-primary">
              Sign Up Page
            </Link>
          </span>
        </form>

        {/* Google signin */}
      </Card>
      <Divider className="my-5" />
      <div
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold p-3 rounded-xl hover:cursor-pointer hover:opacity-75"
      >
        <Image
          className="object-contain"
          src={"/google.png"}
          width={25}
          height={25}
          alt="google"
        />
        <span>Sign In with Google</span>
      </div>
    </div>
  );
};

export default SignIn;
