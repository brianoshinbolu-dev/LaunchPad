import React from "react";

const Home = () => {
  return (
    <div className="vhmin-100 w-100 border bg-d text-light">

      <div className="container d-flex justify-content-between align-items-center h-100">

        <section className="p-3 d-md-flex justify-content-between align-items-center vhmin-100">
          <div className="w-md-50 me-md-4 pt-5 p-m-0 mb-5 mb-md-1">
            <h1 className="fs-1 fw-bold my-5">
              Build Solid <span class="text-primary">Programming Skills</span>
              On Web Development
            </h1>

            <p className="">
              Do you want to get your software development skills and job
              readiness? Take the right first step by registering your interest
              in our programs.
            </p>
          </div>

          <div className="w-md-50 ms-md-4 ">
            <h2 className="">Our Programs</h2>

            <div className="">
              <ul className=" list-group ">
                <li className="border rounded my-2 border-primary list-group-item list-group-item-dark bg-dark text-light">
                  <div className="">
                    <div className="p-2 text-primary fw-semibold fs-5">Learn Frontend Development with LaunchPad Academy</div>
                    <div className="p-2 fs-md-5">
                      Ready? Dedicate 12 weeks to learning
                      Web development with peers.
                    </div>
                    <a className=" ps-1 my-3 text-primary bg-dark text-decoration-none">Learn more</a>
                  </div>
                </li>

                <li class="w-100 border rounded my-2 border-primary list-group-item list-group-item-dark bg-dark text-light">
                  <div class="">
                    <div class="text-primary p-2 fw-semibold fs-5">
                      Learn Backend Development with LaunchPad Academy
                    </div>
                    <div class="p-2  fs-md-5">
                      Apply to Backend Development if you are looking for even more
                      challenges .
                    </div>

                    <div class="">
                    <a className="ps-1 my-3 text-primary bg-dark text-decoration-none">Learn more  </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
};

export default Home;
