import React from "react";

import Section from "../../../HOC/Section";
import bgImage from "../../../assets/img/home_bg.jpg";
import Link from "../../UI/Link/Link";

const home = () => {
  return (
    <Section id="home">
      <div>
        <div
          className="home-content p-5"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="intro container text-center text-light">
            <h1 className="title">ALETANIUM LLC</h1>
            <h2 className="sub-title mb-4">
              We offer our experience in software development to build and
              transform your business.
            </h2>
            <Link target="about" classes="btn btn-primary rounded-0 mr-2">
              Learn More
            </Link>
            <Link target="contact" classes="btn btn-light text-dark rounded-0">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
