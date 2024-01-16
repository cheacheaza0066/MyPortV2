import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { TypeAnimation } from "react-type-animation";

function Project() {
  const textStyle = {
    heading: "Ubuntu, sans-serif",
    sans: "Cabin, sans-serif",
    monospace: "Fira Code, monospace",
  };
  return (
    <>
      <Nav />
      <div
        className="flex flex-col w-full bg-gray-800"
        style={{ fontFamily: textStyle.monospace }}
      >
        <div className="flex flex-col items-center justify-center w-full mt-64">
          <p className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
            <TypeAnimation
              sequence={["Project", 1000]}
              wrapper="span"
              speed={20}
              style={{ color: "white" }}
              repeat={Infinity}
              cursor={false}
            />
          </p>
          <p className="mt-7 text-white text-base md:text-xl lg:text-2xl font-medium">
            Here’s the project I developed.
          </p>
        </div>

        <div className="mt-44">
          <Card/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
