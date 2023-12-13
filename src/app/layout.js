// "use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/AuthContext";
import "./globals.css";
import { UiProviders } from "./provider";

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
        <ToastContainer position="top-right" newestOnTop theme="dark" />
        <AuthProvider>
          <UiProviders>
            <main className="dark text-foreground bg-background lg:container">
              <NavBar />
              {children}
              <Footer />
            </main>
          </UiProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
