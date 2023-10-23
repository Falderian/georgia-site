import React from "react";

import Section from "../../../HOC/Section";

const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Services
          </h3>
          <h6 className="section-subtitle ">
            We provide high-quality maintenance and timely technical support for
            our software product and effective solutions to your business
            challenges.
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex flex-column align-items-center">
                <div className="service-icon mr-4">
                  <i className="fas fa-briefcase" />
                </div>
                <div className="service-body">
                  <p className="service-description">
                    Our customers repeatedly return to us with new projects and
                    are happy to recommend us to their business partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex flex-column align-items-center h-auto">
                <div className="service-icon mr-4">
                  <i className="fas fa-chart-bar" />
                </div>
                <div className="service-body">
                  <p className="service-description">
                    Our employees work effectively both as an independent team
                    and as part of a large international team of 100+.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex flex-column align-items-center h-auto">
                <div className="service-icon mr-4">
                  <i className="fas fa-fist-raised" />
                </div>
                <div className="service-body">
                  <p className="service-description">
                    Our team has experience in software development in various
                    fields such as real estate, education, e-commerce.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex flex-column align-items-center h-auto">
                <div className="service-icon mr-4">
                  <i className="far fa-paper-plane" />
                </div>
                <div className="service-body">
                  <p className="service-description">
                    Our values includes the following: honesty and transparency
                    in interaction with the customer, constant self-development,
                    effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex flex-column align-items-center h-auto">
                <div className="service-icon mr-4">
                  <i className="fas fa-gem" />
                </div>
                <div className="service-body">
                  <p className="service-description">
                    Our employees receive a well-equipped workplace, continuous
                    professional growth, participation in the selection of
                    technologies for project implementation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex flex-column align-items-center h-auto">
                <div className="service-icon mr-4">
                  <i className="far fa-life-ring" />
                </div>
                <div className="service-body">
                  <p className="service-description">
                    We believe that it is best to solve complex problems and
                    grow professionally in an environment of highly qualified
                    specialists and like-minded people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
