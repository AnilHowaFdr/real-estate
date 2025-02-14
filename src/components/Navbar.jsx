import { useState } from "react";
import { assets } from "../assets/assets.js";
import { useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container flex justify-between items-center py-6 px-6 md:px-20 lg:px-32 bg-transparent">
        <div>
          <img src={assets.logo2} alt="logo" className="w-full" />
        </div>
        <ul className="hidden md:flex gap-5 lg:gap-8 text-dark text-lg font-semibold">
          <a href="#Header" className="cursor-pointer  hover:text-brand">
            Home
          </a>
          <a href="#About" className="cursor-pointer  hover:text-brand">
            About
          </a>
          <a href="#Property" className="cursor-pointer  hover:text-brand">
            Property
          </a>
          <a href="#Pages" className="cursor-pointer  hover:text-brand">
            Pages
          </a>
          <a href="#Contact" className="cursor-pointer  hover:text-brand">
            Contact
          </a>
        </ul>
        <button className="hidden text-lg font-semibold md:block bg-white px-4 py-2 text-dark rounded-full hover:bg-dark hover:text-white">
          Sign Up
        </button>
        <img
          src="/menu.png"
          alt="menu"
          onClick={() => setShow(true)}
          className="cursor-pointer md:hidden w-7"
        />
      </div>
      {/* ================mobile_menu=========== */}
      <div
        className={`md:hidden ${
          show ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-brand transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src="/close.png"
            onClick={() => setShow(false)}
            className="w-6"
            alt="close"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-light transition-all">
          <a
            href="#Header"
            onClick={() => setShow(false)}
            className="hover:border-b-4 hover:border-2-dark px-4 py-2 inline-block"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setShow(false)}
            className="hover:border-b-4 hover:border-dark px-4 py-2 inline-block"
          >
            About
          </a>
          <a
            href="#Property"
            onClick={() => setShow(false)}
            className="hover:border-b-4 hover:border-dark px-4 py-2 inline-block"
          >
            Property
          </a>
          <a
            href="#Pages"
            onClick={() => setShow(false)}
            className="hover:border-b-4 hover:border-dark px-4 py-2 inline-block"
          >
            Pages
          </a>
          <a
            href="#Contact"
            onClick={() => setShow(false)}
            className="hover:border-b-4 hover:border-dark px-4 py-2 inline-block"
          >
            Contact
          </a>
        </ul>
        <button className="block text-lg mt-4 bg-white px-8 py-2 text-dark m-auto cursor-pointer rounded-full hover:bg-dark hover:text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
