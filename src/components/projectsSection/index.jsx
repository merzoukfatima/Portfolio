import Link from "next/link";
import React, { useState } from "react";
import { fields, projects } from "@/util/database";

export default function ProjectsSection() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("website");
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const changeView = (event) => {
    setView(event.target.id);
  };
  return (
    <main id="Projects">
      <div className="relative overflow-hidden bg-tertiary min-h-[600px]">
        {/* Hero Content */}
        <div className="px-4 mx-auto py-16 text-center xl:p-20 xl:max-w-7xl">
          <p className="text-4xl mb-2 lg:text-5xl font-vidaloka text-secondary">
            {"Portfolio"}
          </p>
          <div
            onClick={toggleMenu}
            className="flex items-center justify-between lg:order-2 border-b border-secondary lg:hidden md:w-[450px] mx-auto sm:w-[400px]">
            <button className="block px-3 py-2 text-lg font-barlow text-secondary">
              {fields.find((item) => item.id === view).label}
            </button>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-secondary "
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}>
              <svg
                className={`w-5 h-5 ${isMenuOpen ? "rotate-90" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex lg:justify-center ${
              isMenuOpen
                ? "block items-center z-30 justify-between w-full absolute top-0 left-0 mt-36 px-4 md:px-20 bg-tertiary bg-opacity-80"
                : "hidden"
            }`}
            id="mobile-menu">
            <div
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              className="flex flex-col border-t border-secondary mt-3 lg:border-0 font-medium lg:flex-row lg:space-x-8 lg:mt-4">
              {fields.map((field, index) => (
                <button
                  key={index}
                  id={field.id}
                  onClick={changeView}
                  className={`block py-2 text-lg border-b border-secondary lg:border-0 font-barlow ${
                    view === field.id ? "text-primary" : "text-secondary"
                  } `}>
                  {field.label}
                </button>
              ))}
            </div>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 xl:mx-16 mx-4 md:px-40 lg:px-0">
            {/* Image Section */}
            {projects.map((project, index) => {
              if (view === project.type)
                return (
                  <div
                    key={index}
                    className="flex flex-col mt-16 lg:mx-8 lg:mb-8 group">
                    <div className="relative lg:w-96 h-56 mx-auto transition duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 -m-4 -rotate-2 rounded-xl bg-primary" />
                      <div className="absolute inset-0 -m-4 rotate-1 rounded-xl bg-secondary shadow-inner" />
                      <img
                        src={project.image}
                        className="relative mx-auto rounded-lg shadow-lg h-56 w-96 [backface-visibility:hidden]"
                        alt="Hero Image"
                      />
                      <div className="absolute inset-0 h-full w-full rounded-xl text-primary px-5 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center font-barlow">
                          <h1 className="text-xl font-bold pb-1">
                            {project.name}
                          </h1>
                          <p className="text-base pb-2">
                            {project.description}
                          </p>
                          <div className="flex justify-center pb-2">
                            {project.url && (
                              <Link
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-primary hover:text-tertiary/80">
                                <span className="sr-only">{project.name}</span>
                                <svg
                                  class="h-[22px] w-[22px]"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18">
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                  />
                                </svg>
                              </Link>
                            )}

                            <Link
                              href={project.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-primary hover:text-tertiary/80">
                              <span className="sr-only">GitHub</span>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 496 512"
                                className="w-6 h-6 mx-2"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
      {/* END Hero Content */}
    </main>
  );
}
