import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedDestinations from "./components/FeaturedDestinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import AvailabilityTracker from "./components/AvailabilityTracker";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <WhyChooseUs />
        <AvailabilityTracker />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
