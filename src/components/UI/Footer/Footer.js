import React from "react";

import Link from "../Link/Link";

const footer = () => {
  return (
    <footer className="">
      <div className="container text-light pt-5">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
            <div className="footer-title">
              <h6>About Us</h6>
            </div>
            <div className="footer-content">
              <p>
                <small className="text">
                  We offer our experience in software development to build and
                  transform your business.
                </small>
              </p>
              <button className="btn btn-sm btn-primary rounded-0">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 mb-5">
            <div className="footer-title">
              <h6>Quick Links</h6>
            </div>
            <div className="footer-content">
              <ul className="list-group quick-links">
                <li>
                  <Link target="home" offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target="about">About</Link>
                </li>
                <li>
                  <Link target="services">Services</Link>
                </li>
                <li>
                  <Link target="blog">Blog</Link>
                </li>
                <li>
                  <Link target="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>Contact Us</h6>
            </div>
            <div className="footer-content">
              <p className="text">
                <small>
                  Address : Georgia, Tbilisi, Saburtalo district, Bakhtrioni
                  street, N 22
                </small>
              </p>
              <p className="text">
                <small>E-mail : payotak@gmail.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer pt-3 pb-3 text-center">
        <small>© All Right Reserved. Alletanium LLC</small>
      </div>
    </footer>
  );
};

export default footer;
