import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function Nav() {
  let Links = [
    { name: "HOME", link: "/home" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" }
  
  ];
  let [open, setOpen] = useState(false);
  const textStyle = {
    fontFamily: 'Lemon, serif',

  };

  return (
    <div className="w-full fixed top-0 left-0" style={textStyle}>
      <div className="md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-white" />
          <span className="text-white">Inscribe</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon className="text-white"/> : <Bars3BottomRightIcon className="text-white"/>}
        </div>
        {/* linke items */}
        <ul
          className={`bg-gray-800 md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            // eslint-disable-next-line react/jsx-key
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button> */}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}

export default Nav;
