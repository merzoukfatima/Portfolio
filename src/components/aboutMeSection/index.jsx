import Link from "next/link";
import React from "react";

export default function AboutMeSection() {
  return (
    // <main id="AboutMe">
    //   <div className="relative pt-6 overflow-hidden bg-secondary">
    //     {/* Hero Content */}
    //     <div className="relative flex flex-col px-4 py-16 mx-auto space-y-16 text-center lg:flex-row lg:space-y-0 lg:px-20 lg:py-20 lg:text-left xl:max-w-7xl">
    //       <div className="py-20 md:px-0 lg:flex lg:w-1/4 lg:items-center lg:justify-center">
    //         <div className="absolute top-0 left-0 w-56 h-56 border-2 rounded-full -ml-40 bg-primary lg:w-[700px] lg:h-[700px] border-secondary" />
    //         {/* <div className="absolute top-0 left-0 w-56 h-56 border-2 rounded-full bg-tertiary lg:w-[600px] lg:h-[600px] border-secondary" /> */}
    //         <div className="absolute top-0 left-0 border-2 rounded-full -mt-[4px] -ml-[164px] bg-transparent lg:h-[708px] lg:w-[708px] h-[228px] w-[228px] border-primary" />
    //         <div className="absolute bottom-0 left-0 w-56 h-56 border-2 rounded-full -ml-40 bg-secondary lg:w-[700px] lg:h-[700px] border-secondary" />
    //         <div className="absolute bottom-0 left-0 border-2 rounded-full -mt-[4px] -ml-[164px] bg-transparent lg:h-[708px] lg:w-[708px] h-[228px] w-[228px] border-primary" />

    //         {/* <div className="absolute bottom-0 left-0 w-56 h-56 border-2 rounded-full -mr-60 bg-secondary lg:w-[600px] lg:h-[600px] border-tertiary" /> */}
    //       </div>
    //       <div className=" lg:z-10 lg:w-3/4 bg-secondary bg-opacity-70">
    //         <p className="py-2 text-xl font-bold text-tertiary text-opacity-80 font-barlow ">
    //           {
    //             "Hi there! I'm Fatima Zohra MERZOUK, but you can call me Fatima. I'm a Frontend Web Developer and a recent graduate of Computer Systems Engineering. I love technology and everything related to it."
    //           }
    //         </p>
    //         <p className="py-2 text-xl font-bold text-tertiary text-opacity-80 font-barlow">
    //           {
    //             "My journey began in computer systems engineering,where I delved into artificial intelligence, machine learning, and networks, where I’ve worked on some cool projects, like building a model to detect fake news. How awesome is that? Now, thanks to the Re:Coded boot camp,  I can bring that tech flair to the frontend scene crafting amazing websites with HTML, CSS, JavaScript, and React."
    //           }
    //         </p>
    //         <p className="py-2 text-xl font-bold text-tertiary text-opacity-80 font-barlow">
    //           {
    //             "Detail-oriented, creative, and always up for a challenge, my goal is to blend AI skills with web development to make the web more intuitive. Excited to collaborate with professionals who share my passion and vision. Get in Touch and Let's chat!"
    //           }
    //         </p>
    //       </div>
    //     </div>
    //     {/* END Hero Content */}
    //   </div>
    // </main>
    <main id="AboutMe">
      <div className="relative overflow-hidden bg-secondary">
        <div className="relative flex px-4 py-16 mx-auto space-y-16 text-center lg:flex-row lg:space-y-0 lg:px-20 lg:py-20 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:ml-16 lg:w-1/2 lg:items-center ">
            <div className="relative ml-3 -mr-2 lg:w-96">
              <div className="absolute top-0 left-0 w-48 h-48 -mt-40 -ml-20 rounded-full lg:w-64 lg:h-64 bg-primary" />
              <div className="absolute bottom-0 right-0 w-48 h-48 -mb-4 rounded-full lg:w-64 lg:h-64 -mr-14 bg-tertiary" />
              <div className="absolute top-0 left-0 border-2 rounded-full -mt-[146px] -ml-[2px] bg-transparent lg:h-[292px] lg:w-[292px] h-[228px] w-[228px] border-secondary bg-cover bg-right bg-[url('/images/Merzouk_Fatima_Zohra.jpg')]" />
            </div>
          </div>
          <div className="p-10 md:px-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div>
              <p className="py-2 text-lg font-bold text-tertiary text-opacity-80 font-barlow">
                {"I'm"} <span className="text-primary">Fatima Zohra MERZOUK</span>,
                a Frontend Web Developer passionate about blending AI expertise
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
        {/* END Hero Content */}
      </div>
    </main>
  );
}
