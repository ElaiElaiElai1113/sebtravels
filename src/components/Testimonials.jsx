import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "SEBTravels made our honeymoon in Italy absolutely perfect! Every detail was handled with care, and we had the most magical time.",
      author: "Jane & John Doe",
      role: "Honeymooners, Italy",
      imageSrc: "https://placehold.co/60x60/FFD700/000000?text=JD",
    },
    {
      quote:
        "I've traveled with SEBTravels multiple times, and they always exceed expectations. Their local insights are invaluable!",
      author: "Alice Smith",
      role: "Solo Traveler, Southeast Asia",
      imageSrc: "https://placehold.co/60x60/A020F0/FFFFFF?text=AS",
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container px-4 px-md-5">
        <h2 className="display-5 fw-bold text-center text-dark mb-5">
          What Our Travelers Say
        </h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {testimonialsData.map((testimonial, index) => (
            <div className="col" key={index}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                imageSrc={testimonial.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
