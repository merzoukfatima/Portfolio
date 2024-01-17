import Link from "next/link";
import React from "react";

export default function AboutMeSection() {
  return (
    <main id="AboutMe">
      <div className="relative pt-6 lg:pt-0 overflow-hidden bg-secondary">
        {/* Hero Content */}
        <div className="relative flex flex-col px-4 mx-auto py-16 space-y-16 text-center lg:flex-row lg:space-y-0 lg:px-20 lg:py-16 lg:text-left xl:max-w-7xl">
          {/* Image Section */}
          <div className="flex items-center justify-center w-full pt-32 lg:w-1/2 lg:mr-10">
            <div className="flex flex-col items-center justify-center mt-10 w-96 lg:mt-16">
              <div className="absolute w-48 h-48 -mt-44 -ml-40 lg:-ml-48 lg:mr-8 rounded-full bg-primary lg:w-64 lg:h-64" />
              <div className="absolute w-44 h-44 -mt-72 -mr-44 lg:-mr-48 lg:ml-8 rounded-full  bg-tertiary lg:w-64 lg:h-64" />
              <div className="absolute border-2 rounded-full mx-auto -mt-32 lg:-mt-28 bg-transparent lg:h-72 lg:w-72 h-56 w-56 border-secondary bg-cover bg-right bg-[url('/images/Merzouk_FatimaZohra.jpg')]" />
            </div>
          </div>
          {/* Text Section */}
          <div className="p-10 md:px-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div>
              <p className="py-2 text-lg font-bold text-tertiary text-opacity-80 font-barlow">
                {"I'm"}
                <span className="text-primary"> Fatima Zohra MERZOUK</span>, a
                Frontend Web Developer passionate about blending AI expertise
                with intuitive web design. Graduated in Computer Systems
                Engineering, {"I've"} honed my skills through the Re:Coded boot
                camp, mastering tools like React and Next.js.
              </p>

              <p className="py-2 text-lg font-bold text-tertiary text-opacity-80 font-barlow">
                My academic journey delved into AI, machine learning, and
                networks, empowering me to work on innovative projects, such as
                detecting fake news models. Now, I channel this tech background
                to create dynamic and user-friendly interfaces.
              </p>
              <p className="py-2 text-lg font-bold text-tertiary text-opacity-80 font-barlow">
                Actively seeking collaborative opportunities, {"Let's"} innovate
                together!
              </p>
              <Link
                href="/FatimaZohraMerzoukResume.pdf"
                download
                className="inline-flex items-center justify-center py-3 my-5 space-x-2 font-semibold leading-6 border-2 rounded-lg border-primary bg-secondary px-7 text-primary hover:bg-primary hover:text-secondary hover:border-secondary">
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END Hero Content */}
    </main>
  );
}
