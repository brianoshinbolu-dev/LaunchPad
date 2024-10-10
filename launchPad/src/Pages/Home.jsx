import React from "react";

const Home = () => {
  return (
    <div className="vh-100 w-100 border bg-d text-light">
      <div className="container h-100">
        <section className="d-flex justify-content-between align-items-center h-100">
          <div className="w-50 me-4">
            <h1 className="fs-1 fw-bold">
              Build Solid <span class="text-warning">Programming Skills</span>
              On Foundational Computer Science
            </h1>

            <p className="text-white/2 leading-[180%] text-sm md:text-base font-medium">
              Do you want to improve your software development skills and job
              readiness? Take the right first step by registering your interest
              in our programs.
            </p>
          </div>

          <div className="w-50 ms-4">
            <h2 className="">
              Our Programs
            </h2>

            <div className="">
              <ul className="">
                <li className=" ">
                  <div className="">
                    <div className="">
                      CS50x with Projecstake Academy
                    </div>
                    <div className="">
                      Got some time to spare? Dedicate 12 weeks to learning
                      foundational topics in computer science with peers.
                    </div>
                        <button className="">
                          Learn more
                        </button>
                  </div>
                </li>


                <li class="border-solid border-[0.5px] border-black-3 p-6 rounded-xl">
                  <div class="relative flex flex-wrap gap-x-3">
                    <div class="w-full flex-none text-lg md:text-xl font-semibold tracking-tight text-white">
                      LearnCS
                    </div>
                    <div class="mt-2 w-full flex-none text-sm md:text-base leading-7 text-white/2">
                      Apply to LearnCS if you are looking for even more
                      challenges and have the time to commit.
                    </div>
                    <div class="mt-4 flex items-center gap-x-3 text-sm md:text-base leading-7">
                      <a
                        href="#"
                        data-phx-link="redirect"
                        data-phx-link-state="push"
                        class="flex flex-row items-center gap-x-3 text-accent disabled-true"
                      >
                        <button class="font-semibold text-sm md:text-base disabled-true">
                          Learn more
                        </button>
                      </a>
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
