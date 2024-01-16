import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Nav() {
  let Links = [
    { name: "About Me", link: "/" },
    { name: "Project", link: "/project" },

    {
      name: "My Resume",
      link: "https://drive.google.com/drive/folders/1l0SHR66QvsCEdzQyJaSB2GtdfUkNwnHr?usp=sharing",
    },
    { name: "My Github", link: "https://github.com/cheacheaza0066" },
  ];
  let [open, setOpen] = useState(false);
  const textStyle = {
    heading: "Ubuntu, sans-serif",
    sans: "Cabin, sans-serif",
    monospace: "Fira Code, monospace",
  };

  return (
    <div
      className="w-full fixed top-0 left-0 z-10"
      style={{ fontFamily: textStyle.monospace }}
    >
      <div className="md:flex items-center justify-between bg-gray-800 py-1 md:px-10 px-7">
        {/* logo section */}
        <div className="ml-16 font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            className="w-14 m-5 rounded-full"
            src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/168428269_3951792324882647_1929099210224564198_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGRMIMvqPQd1A1Ocb7i2lnxXKsLPX0HHs5cqws9fQceznCUqflFBqHyiyjcLqRMXXWrtWK-J5SC7z6_waY0B7Qi&_nc_ohc=ZDMAyX7A1ZYAX9wC3K1&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfDR8gTmUKdtEuMNQOuMEOXD_zo6Gya6BeZjXZcT9OXBAg&oe=65C431E9"
            alt=""
          />
          <span className="text-white text-xl">Thanin Pitakpooksin</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 mt-7"
        >
          {open ? (
            <XMarkIcon className="text-white" />
          ) : (
            <Bars3BottomRightIcon className="text-white" />
          )}
        </div>
        {/* linke items */}
        <ul
          className={`bg-gray-800 md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-24" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            // Use the 'key' prop to avoid React warnings
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold ">
              <a
                // Apply target="_blank" rel="noopener noreferrer" only for specific links
                {...(link.name !== "About Me" &&
                  link.name !== "Project" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
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
