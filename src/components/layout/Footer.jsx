import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/logo.svg";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-14 border-b border-b-[#627d77]">
        <div className="container px-4 md:px-4">
          <div className="  flex flex-col sm:flex-row items-center justify-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="flex items-center gap-3 text-white">
              <h3 className="font-semibold text-lg">Follow us :</h3>
              <FaFacebookF className="w-8 h-8 p-1 rounded-full border border-brand cursor-pointer hover:bg-brand" />
              <FaPinterestP className="w-8 h-8 p-1 rounded-full border border-brand cursor-pointer hover:bg-brand" />
              <FaLinkedinIn className="w-8 h-8 p-1 rounded-full border border-brand cursor-pointer hover:bg-brand" />
              <IoLogoYoutube className="w-8 h-8 p-1 rounded-full border border-brand cursor-pointer hover:bg-brand" />
              <FaInstagram className="w-8 h-8 p-1 rounded-full border border-brand cursor-pointer hover:bg-brand" />
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-dark  ">
        <div className="container px-4 md:px-6 text-white ">
          <div className="gap-5 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between py-10 border-b border-b-[#627d77]">
            <div className="text-white">
              <p>
                Specializes in providing high-class tours for those in need.
                Contact Us
              </p>
              <ul className="pt-3">
                <li className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>101 E 129th St, East Chicago, IN 46312, US</p>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <FaPhoneFlip />
                  <p>1-333-345-6868</p>
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineMailOutline />
                  <p>themesflat@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="text-white ">
              <h3 className="font-semibold text-lg">Categories</h3>
              <ul className="text-slate-200">
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Pricing Plans
                </li>
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Our Services
                </li>
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  About Us
                </li>
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-lg">Our Company</h3>
              <ul className="text-slate-200">
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Property for Sale
                </li>
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Property For Rent
                </li>
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Property For Buy
                </li>
                <li className="hover:border-b border-b-slate-200 w-fit cursor-pointer">
                  Our Agents
                </li>
              </ul>
            </div>
            <div className="text-white input">
              <h3 className="font-semibold text-lg">Newsletter</h3>
              <p className="py-3">
                Your Weekly/Monthly Dose of Knowledge and inspiration
              </p>
              <div className="p-3 cursor-pointer border rounded-full relative ">
                <input
                  type="email"
                  className="bg-transparent cursor-pointer"
                  placeholder="Your email address"
                />
                <IoSend className="text-white absolute right-1 text-2xl top-3" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-10">
            <p>©2025 Homez. All Rights Reserved.</p>
            <ul className="flex items-center gap-5">
              <li className="hover:text-brand text-white  cursor-pointer">
                <p>Terms of service</p>
              </li>
              <li className="hover:text-brand text-white  cursor-pointer">
                <p>Privacy Policy</p>
              </li>
              <li className="hover:text-brand text-white  cursor-pointer">
                <p>Cookies Policy</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
