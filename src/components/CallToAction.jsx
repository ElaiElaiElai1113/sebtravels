import React from "react";

const CallToAction = () => {
  return (
    <section className="py-5 bg-info text-white text-center">
      <div className="container px-4 px-md-5">
        <h2 className="display-5 fw-bold mb-3">
          Ready for Your Next Adventure?
        </h2>
        <p className="lead mb-4 opacity-75">
          Contact us today to start planning your dream getaway!
        </p>
        <button className="btn btn-light btn-lg text-info fw-bold shadow">
          View Available Tours!
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
