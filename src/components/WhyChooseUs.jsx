import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-5 bg-secondary">
      <div className="container px-4 px-md-5 text-center">
        <h2 className="display-5 fw-bold mb-5 text-white">
          Why Choose <span className="text-primary">SEB</span>
          <span className="text-info">Travels</span>?
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="bg-primary-dark p-4 rounded-3 shadow">
              <svg
                className="bi mb-3"
                width="4em"
                height="4em"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002 12c0 2.755 1.05 5.49 2.944 7.424M18.618 4.984A11.955 11.955 0 0122 12c0 2.755-1.05 5.49-2.944 7.424M12 22v-2.755" />
              </svg>
              <h3 className="fs-3 fw-semibold mb-3 text-white">
                Expert Guidance
              </h3>
              <p className="text-white-50">
                Our experienced travel advisors craft personalized itineraries
                tailored to your dreams.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="bg-primary-dark p-4 rounded-3 shadow">
              <svg
                className="bi mb-3"
                width="4em"
                height="4em"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L12 21l-2.592-11c.512-.598 1.482-1 2.592-1zm0 0V2.944" />
              </svg>
              <h3 className="fs-3 fw-semibold mb-3 text-white">
                Seamless Planning
              </h3>
              <p className="text-white-50">
                From flights to accommodations, we handle every detail for a
                stress-free journey.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="bg-primary-dark p-4 rounded-3 shadow">
              <svg
                className="bi mb-3"
                width="4em"
                height="4em"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="fs-3 fw-semibold mb-3 text-white">
                Unforgettable Experiences
              </h3>
              <p className="text-white-50">
                We connect you with authentic experiences that create lasting
                memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
