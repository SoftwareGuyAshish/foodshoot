import Footer from "@/components/Footer";
import Hero from "@/components/layouts/Hero";
import Listing from "@/components/layouts/Listing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Listing />
      <Footer />
    </div>
  );
}
