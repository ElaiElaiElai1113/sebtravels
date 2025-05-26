import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center justify-content-center text-center vh-100 bg-cover bg-center"
      style={{
        backgroundImage: `url('background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded"></div>
      <div
        className="position-relative z-1 text-white p-4 p-md-5 mx-auto rounded-3 shadow"
        style={{ maxWidth: "2000px" }}
      >
        <h1
          className="display-3 fw-bold lh-1 mb-4 animate__animated animate__fadeInUp"
          style={{ fontSize: "7.5rem" }}
        >
          Your Journey Begins Here
        </h1>
        <p
          className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s text-primary"
          style={{ fontSize: "3.75rem" }}
        >
          SECURED - EMPOWERED - BLESSED
        </p>
        <button
          className="btn btn-primary btn-lg shadow animate__animated animate__fadeInUp animate__delay-2s"
          onClick={() => {
            document.getElementById("availability-tracker").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <span className="fw-bold">Explore</span>{" "}
          <span className="fw-bold">Destinations</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
