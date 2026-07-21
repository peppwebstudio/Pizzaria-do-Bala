import React from "react";
import { CartProvider } from "./hooks/CartContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/layout/FloatingButtons";
import CartDrawer from "./components/layout/CartDrawer";

import Hero from "./components/sections/Hero";
import Promotions from "./components/sections/Promotions";
import Menu from "./components/sections/Menu";
import Ordering from "./components/sections/Ordering";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Reviews from "./components/sections/Reviews";
import Instagram from "./components/sections/Instagram";
import DeliveryPlatforms from "./components/sections/DeliveryPlatforms";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-crust">
        <Navbar />
        <main>
          <Hero />
          <Promotions />
          <Menu />
          <Ordering />
          <WhyChooseUs />
          <Reviews />
          <Instagram />
          <DeliveryPlatforms />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}