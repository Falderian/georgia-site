import React, { Fragment } from "react";

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Facts from "./Facts/Facts";
import Contact from "./Contact/Contact";
import MapMarker from "./MapMarker/MapMarker";

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Facts />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
