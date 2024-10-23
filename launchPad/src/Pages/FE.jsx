import React from "react";

const FE = () => {
  return (
    <div className="bg-d text-light vhmin-100 d-md-flex align-items-center">
      <section class="container p-4 d-md-flex align-items-center h-100 ">
        <div class="">
          <h1 class="fs-1 py-4 fw-bold ">
            Learn, Grow and Start your Career with <span class="text-primary">Frontend Web Development</span>
          </h1>

          <p class="py-4">
            We are excited to help guide you through it. The course teaches problem-solving skills and covers various Frontend web Development topics. No prior programming experience is required, and there
            are no prerequisites.
          </p>

        </div>

        <div class="w-100 h-100">  
            <a href="" target="_blank"class="w-100 h-100 d-flex justify-content-center">
              <button class="bg-primary border rounded-3 w-50 p-4">
                Register
              </button>
            </a>
        </div>

      </section>
    </div>
  );
};

export default FE;
