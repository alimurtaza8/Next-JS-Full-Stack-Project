// import Image from "next/image";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/products/ProductGrid";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductGrid />
    </div>
  );
}
