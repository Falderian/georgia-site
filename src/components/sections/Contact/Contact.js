import React from "react";

import Section from "../../../HOC/Section";

export const Contact = () => {
  const openEmailClient = (event) => {
    event.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=payotak@gmail.com&su="Aletaniumium LLC"`
    );
  };
  return (
    <Section id="contact">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Contact </span>Us
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            If you are looking for a solution to a business problem using modern
            technologies or you have an idea for an application, we are open to
            cooperation.
          </h6>
        </div>
        <div className="section-content">
          <div className="d-flex justify-content-center ">
            <button
              onClick={openEmailClient}
              className="btn btn-block btn-primary rounded-0 w-25"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
