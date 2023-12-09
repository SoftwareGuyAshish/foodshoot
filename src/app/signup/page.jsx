"use client";
import SignUp from "@/components/SignUp";
import React from "react";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <section className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto py-4 md:px-1">
      <SignUp />
    </section>
  );
};

export default page;
