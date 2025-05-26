import React, { useState } from "react";
import { Modal, Button, Table, Accordion } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
import { tourData } from "./AvailabilityTracker";

const TourModal = ({ show, handleClose, tourGroup }) => {
  if (!tourGroup) return null;

  const availableTours = tourGroup.details.filter(
    (tour) => tour.slots > 0 && tour.status !== "FULLY BOOKED"
  );

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          {tourGroup.type} - Available Tours
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted mb-4">
          Below is the detailed availability for this tour package.
        </p>
        {availableTours.length > 0 ? (
          <div className="table-responsive">
            <Table striped bordered hover className="availability-table">
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
                {availableTours.map((tour, tourIndex) => (
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
        ) : (
          <p className="text-center text-muted fs-5">
            No available tours for this package at the moment. Please check back
            later!
          </p>
        )}
        <p className="text-muted mt-4">
          <small>Rates are subject to change without prior notice.</small>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          href="https://www.facebook.com/ebiyahetravelandtours/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now on Facebook
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const FeaturedDestinations = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTourType, setSelectedTourType] = useState(null);

  const handleShowModal = (tourType) => {
    setSelectedTourType(tourType);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const destinations = [
    {
      imageSrc: "public/assets/danang.jpg",
      altText: "Golden Bridge, Danang",
      title: "Danang, Vietnam",
      description:
        "Discover Danang: Vietnam's coastal gem with stunning beaches, cultural wonders, and the breathtaking Golden Bridge. Perfect for every traveler!",
      tourTypeId: "CHARTERED FLIGHT-DANANG 5D3N",
    },
  ];

  const rowClasses = `row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ${
    destinations.length === 1 ? "justify-content-center" : ""
  }`;

  return (
    <section id="destinations" className="py-5 bg-white">
      <div className="container px-4 px-md-5">
        <h2 className="display-5 fw-bold text-center text-dark mb-5">
          Featured Charters to <span className="text-primary">Danang</span>
        </h2>

        <div className={rowClasses}>
          {destinations.map((dest, index) => (
            <div className="col" key={index}>
              <DestinationCard
                imageSrc={dest.imageSrc}
                altText={dest.altText}
                title={dest.title}
                description={dest.description}
                onViewDetails={() => handleShowModal(dest.tourTypeId)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedTourType && (
        <TourModal
          show={showModal}
          handleClose={handleCloseModal}
          tourGroup={tourData.find((group) => group.type === selectedTourType)}
        />
      )}
    </section>
  );
};

export default FeaturedDestinations;
