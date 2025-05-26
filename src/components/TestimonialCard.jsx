import React from "react";

const TestimonialCard = ({ quote, author, role, imageSrc }) => {
  return (
    <div className="card h-100 rounded-3 shadow-sm border border-light">
      <div className="card-body">
        <p className="card-text text-custom-dark fst-italic mb-4">"{quote}"</p>
        <div className="d-flex align-items-center">
          <img
            src={imageSrc}
            alt={author}
            className="rounded-circle me-3"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <p className="fw-semibold text-dark mb-0">{author}</p>
            <p className="text-muted small">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
