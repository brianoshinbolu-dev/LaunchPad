import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-1">LaunchPad</div>
        <div className="d-flex">
          <div className="m-2 fs-5 fw-bold text-primary">Frontend</div>
          <div className="m-2 fs-5 fw-bold text-primary">Backend</div>
        </div>
        <div className="d-flex">
          <div className="m-2 fs-5">Twitter</div>
          <div className="m-2 fs-5">LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
