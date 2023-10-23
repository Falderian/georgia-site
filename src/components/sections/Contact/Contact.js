import React, { useState } from "react";

import Section from "../../../HOC/Section";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const openEmailClient = (event) => {
    event.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=payotak@gmail.com&su="Alletanium LLC"&body=${message}&bcc=${email}`
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
          <div className="row">
            <div className="col-md-9 col-lg-7 mr-auto ml-auto">
              <form>
                <div className="form-group">
                  <input
                    id="name"
                    type="text"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name..."
                  />
                </div>
                <div className="form-group">
                  <input
                    onInput={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    placeholder="Enter email..."
                  />
                </div>
                <div className="form-group">
                  <textarea
                    onInput={(e) => setMessage(e.target.value)}
                    id="message"
                    className="form-control rounded-0"
                    rows="5"
                    placeholder="Enter Message..."
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    onClick={openEmailClient}
                    className="btn btn-block btn-primary rounded-0 mr-auto ml-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
