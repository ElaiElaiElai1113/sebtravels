// src/components/AvailabilityTracker.js
import React from "react";
import { Table, Button, Accordion } from "react-bootstrap";

export const tourData = [
  {
    type: "DANANG 5D3N",
    details: [
      {
        departureDate: "APR 02-06",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 0,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "APR 09-13",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 0,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "APR 16-20",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱32,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 89,
        status: "AVAILABLE",
      },
      {
        departureDate: "APR 23-27",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: -3,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "APR 30-MAY 04",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 0,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "MAY 07-11",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 42,
        status: "AVAILABLE",
      },
      {
        departureDate: "MAY 14-18",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 3,
        status: "3 SLOTS LEFT",
      },
      {
        departureDate: "MAY 21-25",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 53,
        status: "AVAILABLE",
      },
      {
        departureDate: "MAY 28-JUN 01",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 10,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 1-4",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 94,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 04-08",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 29,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 11-15",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 47,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 18-22",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 45,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 25-29",
        package: "5D3N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 64,
        status: "AVAILABLE",
      },
    ],
  },
  {
    type: "DANANG 4D2N",
    details: [
      {
        departureDate: "MAR 30-APR 2",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 0,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "APR 06-09",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 0,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "APR 13-16",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 0,
        status: "FULLY BOOKED",
      },
      {
        departureDate: "APR 20-23",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱23,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 93,
        status: "AVAILABLE",
      },
      {
        departureDate: "APR 27-30",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 42,
        status: "AVAILABLE",
      },
      {
        departureDate: "MAY 04-07",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 20,
        status: "AVAILABLE",
      },
      {
        departureDate: "MAY 11-14",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 73,
        status: "AVAILABLE",
      },
      {
        departureDate: "MAY 18-21",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 20,
        status: "AVAILABLE",
      },
      {
        departureDate: "MAY 25-28",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 81,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 01-04",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 154,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 08-11",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 96,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 15-18",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00.",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 114,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 22-25",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 44,
        status: "AVAILABLE",
      },
      {
        departureDate: "JUN 29-JUL 02",
        package: "4D2N ROSE DANANG CHARTER FLIGHT",
        departureCity: "MNL",
        price: "₱21,838.00.",
        downpayment: "₱10,000.00",
        commission: "₱1,250.00",
        airline: "Vietjet Air",
        slots: 49,
        status: "AVAILABLE",
      },
    ],
  },
];

const AvailabilityTracker = () => {
  return (
    <section id="availability-tracker" className="py-5 bg-white">
      <div className="container px-4 px-md-5">
        <h2 className="display-5 fw-bold text-center mb-4">GROUP TOUR 2025</h2>

        <p className="text-center text-muted mb-5">
          Find your next adventure with our available charter flights to Danang!
        </p>

        <Accordion defaultActiveKey="0" className="mb-5">
          {tourData.map((tourGroup, index) => (
            <Accordion.Item
              eventKey={String(index)}
              key={index}
              className="mb-3"
            >
              <Accordion.Header>
                <h3 className="h4 fw-bold mb-0 text-primary">
                  {tourGroup.type}{" "}
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <div className="table-responsive">
                  <Table striped bordered hover className="availability-table">
                    <thead>
                      <tr>
                        <th>Departure Date</th>
                        <th>Package</th>
                        <th>Departure City</th>
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

        <div className="text-center text-muted mt-5">
          <p className="mb-0">CONTACT US FOR MORE INFORMATION</p>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityTracker;
