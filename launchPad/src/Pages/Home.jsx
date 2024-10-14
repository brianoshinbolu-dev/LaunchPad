import React from "react";

const Home = () => {
  return (
    <div className="vh-100 w-100 border bg-d text-light">
      <div className="container h-100">
        <section className="d-flex justify-content-between align-items-center h-100">
          <div className="w-50 me-4">
            <h1 className="fs-1 fw-bold">
              Build Solid <span class="text-primary">Programming Skills</span>
              On Foundational Computer Science
            </h1>

            <p className="">
              Do you want to improve your software development skills and job
              readiness? Take the right first step by registering your interest
              in our programs.
            </p>
          </div>

          <div className="w-50 ms-4 ">
            <h2 className="">Our Programs</h2>

            <div className="">
              <ul className="fs-5 list-group ">
                <li className="border rounded my-2 border-primary list-group-item list-group-item-dark bg-dark text-light">
                  <div className="">
                    <div className="p-2 text-primary">CS50x with Projecstake Academy</div>
                    <div className="p-2">
                      Got some time to spare? Dedicate 12 weeks to learning
                      foundational topics in computer science with peers.
                    </div>
                    <a className="m-3 text-primary bg-dark text-decoration-none">Learn more</a>
                  </div>
                </li>

                <li class="w-100 border rounded my-2 border-primary list-group-item list-group-item-dark bg-dark text-light">
                  <div class="">
                    <div class="text-primary p-2">
                      LearnCS
                    </div>
                    <div class="p-2">
                      Apply to LearnCS if you are looking for even more
                      challenges and have the time to commit.
                    </div>

                    <div class="">
                    <a className="m-3 text-primary bg-dark text-decoration-none">Learn more</a>
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
