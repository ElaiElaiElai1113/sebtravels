import React, { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.innerWidth > 992) {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top header-custom-border-bottom header-rounded-bottom ${
        isVisible ? "header-show" : "header-hide"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-1 mx-auto mx-lg-0" href="#home">
          <span className="text-primary">SEB</span>
          <span className="text-info">Travels</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end fs-3"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-divider-ul ms-auto me-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#destinations">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
