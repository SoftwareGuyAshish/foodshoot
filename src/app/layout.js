"use client";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FoodShoot</title>
      </head>
      <body className={poppins.className} style={{ backgroud: "#000" }}>
        <NextUIProvider>
          <main className="dark text-foreground bg-background container">
            <Navbar />
            {children}
            <Footer />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
