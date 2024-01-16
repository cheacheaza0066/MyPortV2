import ProjectData from "../../ProjectData";
import { useState } from "react";

function Card() {
  const textStyle = {
    heading: "Ubuntu, sans-serif",
    sans: "Cabin, sans-serif",
    monospace: "Fira Code, monospace",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {ProjectData.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row w-full mt-6 md:mt-24 cursor-pointer mb-20`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ fontFamily: textStyle.monospace }}
        >
          <div
            className={`md:w-1/2 md:ml-52 md:mr-4 ml-10 mr-10 transition-transform duration-300 ${
              hoveredIndex === index ? "transform -translate-y-2" : ""
            }`}
          >
            <img
              className="rounded-3xl w-full"
              src={project.pic}
              alt={project.Head}
            />
          </div>
          <div className="flex flex-col justify-center text-white mt-4 md:mt-0 md:w-1/2 md:ml-10 md:mr-24 ml-10 mr-10">
            <h1

              className={`font-normal text-xl md:text-2xl lg:text-4xl ${
                hoveredIndex === index ? "underline" : ""
              }`}
            >
              {project.Head}
            </h1>
            <p className="mt-2 md:mt-5 font-normal text-sm md:text-base lg:text-lg">{project.body}</p>
            <p
              className={`mt-3 font-normal text-base md:text-lg lg:text-xl text-red-500 ${
                hoveredIndex === index ? "" : ""
              }`}
            >
              Go To Website
              <span
                className={`${
                  hoveredIndex === index
                    ? "ml-5 no-underline transition-transform duration-300 transform translate-x-2"
                    : "ml-2"
                }`}
              >
                &#x2192;
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
