import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-light py-5">
      <div className="container px-4 px-md-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="fs-4 fw-bold text-white mb-3">
              <span className="text-primary">SEB</span>
              <span className="text-info">Travels</span>
            </h3>
            <p className="text-secondary">
              Your trusted partner in global exploration.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="fs-4 fw-bold text-white mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#destinations"
                  className="text-light text-decoration-none"
                >
                  Destinations
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="fs-4 fw-bold text-white mb-3">Contact Us</h3>
            <p className="mb-2">Tagum City</p>
            <p className="mb-2">Email: dummyemail@gmail.com</p>
            <p className="mb-2">Phone: 09999999999</p>
            <div className="d-flex mt-3">
              <a href="#" className="text-light me-3">
                <svg
                  className="bi"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.953H10.5c-.983 0-1.28.612-1.28 1.24v1.51h2.218l-.354 2.326H9.22V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" className="text-light me-3">
                <svg
                  className="bi"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.28-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.636 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="#" className="text-light">
                <svg
                  className="bi"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.269.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372a3.917 3.917 0 0 0 1.417-.923A3.927 3.927 0 0 0 13.24 0.42c-.509-.198-1.09-.333-1.942-.372C10.444.01 10.172 0 8 0zm0 2.136a5.864 5.864 0 1 0 0 11.728A5.864 5.864 0 0 0 8 2.136zm0 1.37a4.494 4.494 0 1 1 0 8.988 4.494 4.494 0 0 1 0-8.988zM13.425 4.56a1.23 1.23 0 1 0 0 2.46 1.23 1.23 0 0 0 0-2.46z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-secondary small mt-4">
          &copy; {new Date().getFullYear()} SEBTravels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
