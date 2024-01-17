import Link from "next/link";
import React from "react";

export default function HomeSection() {
  return (
    <main>
      <div className="relative pt-6 overflow-hidden bg-primary">
        {/* Hero Content */}
        <div className="relative flex flex-col px-4 py-16 mx-auto space-y-16 text-center lg:flex-row lg:space-y-0 lg:p-20 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:w-1/2 lg:items-center">
            <div>
              <p className="pb-2 text-3xl lg:text-4xl font-bold text-tertiary text-opacity-80 font-barlow">
                {"Hello, I'm"}
              </p>
              <p className="mb-2 text-5xl  lg:text-6xl font-vidaloka text-secondary">
                {"Fatima Zohra"}
              </p>
              <p className="text-3xl lg:text-5xl font-bold text-secondary font-barlow">
                {"A Frontend Developer"}
              </p>
              <div className="flex flex-col justify-center pt-10 pb-16 space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
                <Link
                  href="https://www.linkedin.com/in/fatima-merzouk/"
                  className="inline-flex items-center justify-center py-3 space-x-2 font-semibold leading-6 border-2 rounded-lg border-secondary bg-tertiary px-7 text-secondary hover:bg-secondary hover:text-tertiary hover:border-tertiary">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-16 py-20 lg:ml-16 md:px-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="relative mt-10 ml-3 -mr-2 lg:w-96 lg:mt-16">
              <div className="absolute bottom-0 right-0 w-48 h-48 -mb-2 border-2 rounded-full lg:h-72 lg:w-72 border-secondary bg-primary" />
              <div className="absolute bottom-0 right-0 -mb-[10px] -mr-[2px] border-2 rounded-full lg:h-[292px] lg:w-[292px] h-[196px] w-[196px] border-tertiary bg-transparent" />
              <div className="absolute top-0 left-0 w-48 h-48 border-2 rounded-full -mt-36 bg-tertiary lg:h-72 lg:w-72 border-secondary" />
              <div className="absolute top-0 left-0 w-40 h-40 -mt-40 -ml-20 border-2 rounded-full lg:w-64 lg:h-64 border-primary bg-secondary" />
              <div className="absolute bottom-0 right-0 w-40 h-40 -mb-4 border-2 rounded-full lg:w-64 lg:h-64 -mr-14 border-tertiary bg-secondary" />
              <div className="absolute top-0 left-0 border-2 rounded-full -mt-[146px] -ml-[2px] bg-transparent lg:h-[292px] lg:w-[292px] h-[196px] w-[196px] border-primary" />
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
    </main>
  );
}
