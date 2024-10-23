import React from "react";
import twiter from "../assets/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-1 fw-bold text-bk">
          <Link to="/" className="text-decoration-none">
            LaunchPad
          </Link>
        </div>
        <div className="d-none d-md-flex">
          <div className="m-2 fs-5 fw-bold text-primary">
            <em>
              <Link to="/Frontend" className="text-decoration-none">
                Frontend
              </Link>
            </em>
          </div>
          <div className="m-2 fs-5 fw-bold text-primary">
            <em>Backend</em>
          </div>
        </div>
        <div className="d-flex">
          <div className="m-2 fs-5 ">
            <img src={twiter} alt="Twitter" class="block" />
          </div>
          <div className="m-2 fs-5">LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
