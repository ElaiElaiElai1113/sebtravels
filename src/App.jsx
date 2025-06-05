import React, { useState } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedDestinations from "./components/FeaturedDestinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import AvailabilityTracker from "./components/AvailabilityTracker";

function App() {
  // This state is the SINGLE SOURCE OF TRUTH for the selected country filter
  const [activeAvailabilityCountry, setActiveAvailabilityCountry] =
    useState("All");

  // This function is called by FeaturedDestinations when "View Details" is clicked
  const handleFeaturedCountrySelection = (countryName) => {
    console.log(
      "App.js: handleFeaturedCountrySelection received (from FeaturedDestinations):",
      countryName
    );
    setActiveAvailabilityCountry(countryName); // Update the central state

    // Scroll to the AvailabilityTracker section
    const availabilitySection = document.getElementById("availability-tracker");
    if (availabilitySection) {
      availabilitySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // This function is called by AvailabilityTracker's internal filter buttons
  const handleAvailabilityFilterChange = (countryName) => {
    console.log(
      "App.js: handleAvailabilityFilterChange received (from AvailabilityTracker):",
      countryName
    );
    setActiveAvailabilityCountry(countryName); // Update the central state
  };

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <main>
        <HeroSection />
        {/* Pass the callback for "View Details" clicks */}
        <FeaturedDestinations
          onViewDetailsForCountry={handleFeaturedCountrySelection}
        />

        <WhyChooseUs />
        {/* Pass the active country state AND the callback for internal filter changes */}
        <AvailabilityTracker
          selectedCountry={activeAvailabilityCountry} // Now 'selectedCountry', not 'initialSelectedCountry'
          onCountryFilterChange={handleAvailabilityFilterChange}
        />

        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
