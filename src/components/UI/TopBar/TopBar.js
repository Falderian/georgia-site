import React from "react";

const topBar = () => {
  return (
    <div className="top-bar pt-1 pb-1 text-light">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex  pt-2 pb-2 gap-4 align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-envelope" />
              <small>payotak@gmail.com</small>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fas fa-location-dot" />
              <small>
                Georgia, Tbilisi, Saburtalo district, Bakhtrioni street, N 22
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;
