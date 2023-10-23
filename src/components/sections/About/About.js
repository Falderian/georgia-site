import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/about.jpg";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Mission
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            To help companies find and implement solutions to their business
            problems in the most effective way, using all our software
            development experience.
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">About us</h3>
              <div className="about-description">
                <p>We love solving complex and non-trivial problems.</p>
                <p>Experienced specialists are working on your project.</p>
                <p>
                  We use the most modern technologies, so our customers receive
                  effective solutions to their business problems.
                </p>
                <p>
                  We strive for maximum transparency for the customer at all
                  stages of our collaboration.
                </p>
                <p>
                  You don’t need to look for individual specialists, since we
                  take care of the entire development - from design to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
