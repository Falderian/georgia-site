import React from "react";
import Section from "../../../HOC/Section";

const mapMarker = () => {
  return (
    <Section id="map">
      <div>
        <iframe
          title="mapMarker"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.0149856741573!2d44.76311677645283!3d41.72019547528532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447326eda3073d%3A0x496fca5cc79c73fa!2zMjIgQmFraHRyaW9uaSBTdCwgVCdiaWxpc2ksINCT0YDRg9C30LjRjw!5e0!3m2!1sru!2sby!4v1698058923390!5m2!1sru!2sby"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0, marginBottom: "-7px" }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};

export default mapMarker;
