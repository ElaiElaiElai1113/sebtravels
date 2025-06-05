import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import DestinationCard from "./DestinationCard";

import { featuredDestinations } from "../data/FeaturedDestinations";

const FeaturedDestinations = ({ onViewDetailsForCountry }) => {
  const [selectedCountryFilter, setSelectedCountryFilter] = useState("All");

  const handleViewDetailsClick = (countryNameForTracker) => {
    console.log(
      "FeaturedDestinations: View Details clicked for country:",
      countryNameForTracker
    );

    if (onViewDetailsForCountry) {
      onViewDetailsForCountry(countryNameForTracker);
    }
  };

  const uniqueCountries = useMemo(() => {
    const countries = new Set();
    featuredDestinations.forEach((dest) => {
      const countryName = dest.title.split(", ").pop();
      countries.add(countryName);
    });
    console.log("FeaturedDestinations: Unique filter buttons generated:", [
      "All",
      ...Array.from(countries).sort(),
    ]);
    return ["All", ...Array.from(countries).sort()];
  }, [featuredDestinations]);

  const filteredDestinations = useMemo(() => {
    console.log(
      "FeaturedDestinations: Filtering destinations for country:",
      selectedCountryFilter
    );
    if (selectedCountryFilter === "All") {
      return featuredDestinations;
    }
    return featuredDestinations.filter((dest) =>
      dest.title.includes(selectedCountryFilter)
    );
  }, [featuredDestinations, selectedCountryFilter]);

  const rowClasses = `row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ${
    filteredDestinations.length === 1 ? "justify-content-center" : ""
  }`;

  return (
    <section id="destinations" className="py-5 bg-white">
      <div className="container px-4 px-md-5">
        <h2 className="display-5 fw-bold text-center text-dark mb-5">
          Featured Tours
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {uniqueCountries.map((country) => (
            <Button
              key={country}
              variant={
                selectedCountryFilter === country
                  ? "primary"
                  : "outline-primary"
              }
              onClick={() => setSelectedCountryFilter(country)}
              className="px-3 py-2 rounded-pill shadow-sm"
            >
              {country}
            </Button>
          ))}
        </div>

        <div className={rowClasses}>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, index) => (
              <div className="col" key={index}>
                <DestinationCard
                  imageSrc={dest.imageSrc}
                  altText={dest.altText}
                  title={dest.title}
                  description={dest.description}
                  onViewDetails={() =>
                    handleViewDetailsClick(dest.title.split(", ").pop())
                  }
                />
              </div>
            ))
          ) : (
            <p className="text-center text-muted w-100 fs-5">
              No featured destinations found for {selectedCountryFilter}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
