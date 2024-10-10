import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-1">LaunchPad</div>
        <div className="d-flex">
          <div className="m-2 fs-5 fw-bold">Frontend</div>
          <div className="m-2 fs-5 fw-bold">Backend</div>
        </div>
        <div className="d-flex">
          <div className="m-2 fs-5">Twitter</div>
          <div className="m-2 fs-5">LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
