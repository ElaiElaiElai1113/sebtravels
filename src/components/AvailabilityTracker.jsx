import React, { useMemo } from "react";
import { Table, Button, Accordion } from "react-bootstrap";
import { tourData } from "../data/TourData";

const AvailabilityTracker = ({ selectedCountry, onCountryFilterChange }) => {
  const uniqueCountries = useMemo(() => {
    const countries = new Set();
    tourData.forEach((group) => {
      if (group.country) {
        countries.add(group.country);
      }
    });
    return ["All", ...Array.from(countries).sort()];
  }, []);

  const groupedTourData = useMemo(() => {
    let filteredGroups = tourData;

    if (selectedCountry !== "All") {
      filteredGroups = tourData.filter(
        (group) => group.country === selectedCountry
      );
    } else {
    }

    filteredGroups.forEach((group) => {
      group.details.sort((a, b) => {
        const parseDate = (dateStr) => {
          const parts = dateStr.split("-");
          const startMonthDay = parts[0].trim();
          return new Date(`${startMonthDay} 2025`);
        };
        return parseDate(a.departureDate) - parseDate(b.departureDate);
      });
    });

    return filteredGroups;
  }, [selectedCountry]);

  if (tourData.length === 0) {
    return (
      <section id="availability-tracker" className="py-5 bg-white text-center">
        <p className="text-muted">
          No tour availability data found. Please add data to TourData.js.
        </p>
      </section>
    );
  }

  return (
    <section id="availability-tracker" className="py-5 bg-white">
      <div className="container px-4 px-md-5">
        <h2 className="display-5 fw-bold text-center mb-4">
          GROUP TOUR AVAILABILITY 2025
        </h2>

        <p className="text-center text-muted mb-4">
          Select a category to view available tours.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {uniqueCountries.map((country) => (
            <Button
              key={country}
              variant={
                selectedCountry === country ? "primary" : "outline-primary"
              }
              onClick={() => onCountryFilterChange(country)}
              className="px-3 py-2 rounded-pill shadow-sm"
            >
              {country}
            </Button>
          ))}
        </div>

        {groupedTourData.length > 0 ? (
          <Accordion defaultActiveKey="0" className="mb-5">
            {groupedTourData.map((tourGroup, index) => (
              <Accordion.Item
                eventKey={String(index)}
                key={index}
                className="mb-3 shadow-sm"
              >
                <Accordion.Header>
                  <h3 className="h5 fw-bold mb-0 text-primary">
                    {tourGroup.type}{" "}
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="table-responsive">
                    <Table
                      striped
                      bordered
                      hover
                      className="availability-table"
                    >
                      <thead>
                        <tr>
                          <th>Departure Date</th>
                          <th>Package</th>
                          <th>Departure City</th>
                          <th>Price</th>
                          <th>Downpayment</th>
                          <th>Commission</th>
                          <th>Airline</th>
                          <th>Slots Available</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tourGroup.details
                          .filter(
                            (tour) =>
                              tour.slots > 0 && tour.status !== "FULLY BOOKED"
                          )
                          .map((tour, tourIndex) => (
                            <tr key={tourIndex}>
                              <td>{tour.departureDate}</td>
                              <td>{tour.package}</td>
                              <td>{tour.departureCity}</td>
                              <td>{tour.price}</td>
                              <td>{tour.downpayment}</td>
                              <td>{tour.commission}</td>
                              <td>{tour.airline}</td>
                              <td
                                className={
                                  tour.slots <= 0
                                    ? "text-danger fw-bold"
                                    : tour.slots > 0 && tour.slots <= 5
                                    ? "text-warning fw-bold"
                                    : ""
                                }
                              >
                                {tour.slots}
                              </td>
                              <td
                                className={
                                  tour.status === "FULLY BOOKED"
                                    ? "text-danger fw-bold"
                                    : tour.status.includes("SLOTS LEFT")
                                    ? "text-warning fw-bold"
                                    : "text-success fw-bold"
                                }
                              >
                                {tour.status}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>

                  {tourGroup.details.filter(
                    (tour) => tour.slots > 0 && tour.status !== "FULLY BOOKED"
                  ).length === 0 && (
                    <p className="text-center text-muted mt-3">
                      No available tours for this package at the moment. Please
                      check back later!
                    </p>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-muted fs-5">
            No tours found for the selected category.
          </p>
        )}

        <div className="text-center text-muted mt-5">
          <p className="mb-0">CONTACT US FOR MORE INFORMATION</p>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityTracker;
