import React from "react";

const DestinationCard = ({
  imageSrc,
  altText,
  title,
  description,
  onViewDetails,
}) => {
  return (
    <div className="card h-100 rounded-3 shadow-sm overflow-hidden">
      <img
        src={imageSrc}
        alt={altText}
        className="card-img-top"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title fs-4 fw-semibold text-dark mb-2">{title}</h3>
        <p className="card-text text-custom-dark mb-3 mx-3">{description}</p>

        <button
          className="btn btn-primary btn-lg mt-auto fw-bold"
          onClick={onViewDetails}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
