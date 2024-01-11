import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

function Footer() {
  const textStyle = {
    heading: "Ubuntu, sans-serif",
    sans: "Cabin, sans-serif",
    monospace: "Fira Code, monospace",
  };
  return (
    <div
      className="flex justify-between flex-col lg:flex-row w-full h-full bg-slate-900"
      style={{ fontFamily: textStyle.monospace }}
    >
      <div className="ml-10 mr-10 mt-40 lg:mb-52 lg:ml-32">
        <img
          className="w-16 rounded-full"
          src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/367680508_6596799687048551_1438056450386972705_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF7SOJiAn2O5Uq31yzbcPawXLNPh1IUH1Bcs0-HUhQfUGLVY7HVMq7r7u_V9SawHvJgy2CVeAQLrYWyEQzuHahE&_nc_ohc=YYmtmD57ABAAX93E0Wc&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfAy7cuD-MkL91ABMkHggx79qSW4z6-gPYHxAev5xR_N0Q&oe=65A35C8E"
          alt=""
        />
        <p className="text-white font-bold mt-5 text-2xl sm:text-2xl lg:text-2xl lg:text-3xl">
          Thanin Pitakpoolsin
        </p>
        <p className="text-white mt-5 text-base lg:text-xl ">
          I create beautiful websites your users will love. I work with you from
          start to finish to make sure your goals are reached and your users are
          happy.
        </p>
        <div className="text-white mt-5 mb-3 text-base lg:text-xl">
          <h1
            className="mb-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <SiGmail
              className="text-2xl lg:text-3xl"
              style={{ marginRight: "1rem" }}
            />{" "}
            chea14chainat@gmail.com
          </h1>
          <h1
            className="mb-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <MdPhoneIphone
              className="text-2xl lg:text-3xl"
              style={{ marginRight: "1rem" }}
            />{" "}
            062-309-6805
          </h1>
        </div>

        <div className="flex flex-row text-white  text-2xl lg:text-3xl">
          <a
            href="https://th.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/cheacheaza0066"
            className="ml-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/chayan.hmt?locale=th_TH
"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="ml-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>
      <div className="ml-10 mb-52 mt-10 lg:mt-60 lg:ml-32 lg:mb-52 w-full ">
        <div className=" text-white flex flex-col">
          <p className="font-bold text-2xl mb-4 lg:mb-5 sm:text-base lg:text-xl">Quick Links</p>
          <a href="#"className="mb-3 lg:mb-5 lg:text-xl text-base">Homepage</a>
          <a href="#"className="mb-3 lg:mb-5 lg:text-xl text-base">About</a>
          <a href="#"className="mb-3 lg:mb-5 lg:text-xl text-base">Project</a>
          <a href="#"className="mb-3 lg:mb-5 lg:text-xl text-base">Service</a>


        </div>
      </div>
    </div>
  );
}

export default Footer;
