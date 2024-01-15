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
        className="flex flex-col w-full bg-gray-800 h-screen"
        style={{ fontFamily: textStyle.monospace }}
      >
        <div className="flex flex-row justify-center align-middle mt-80">
          <p className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold">
            <TypeAnimation
              sequence={["Project Coming Soon", 1000]}
              wrapper="span"
              speed={20}
              style={{ color: "white" }}
              repeat={Infinity}
              cursor={false}
            />
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Project;
