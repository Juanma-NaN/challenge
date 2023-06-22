import React from "react";
import Telephone from "../assets/images/icon-phone.svg";
import Email from "../assets/images/icon-email.svg";
import Location from "../assets/images/icon-location.svg";
import Logo from "../assets/images/logo.svg";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full py-6 md:px-[8rem] px-8 md:py-16 bg-darkblue-footer">
      <div className="flex flex-col">
        <img
          alt="Logo"
          className="block object-none w-[180px] h-28"
          src={Logo}
        />
        <div className="flex flex-col md:flex-row justify-between sm:gap-12 flex-wrap">
          <div className="flex flex-col md:flex-row items-start flex-wrap gap-2">
            <div className="flex items-start gap-4">
              <img
                alt="Location"
                className="block w-8 h-8 object-none"
                src={Location}
              />
              <p className="text-white text-base font-body max-w-[320px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-2">
                <img
                  alt="Telephone"
                  className="block w-8 h-8 object-none"
                  src={Telephone}
                />
                <p className="text-white font-body">+1-543-123-4567</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img
                  alt="Email"
                  className="block w-8 h-8 object-none"
                  src={Email}
                />
                <p className="text-white font-body">example@fylo.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="google.com" className="text-white font-body">
              About Us
            </a>
            <a href="google.com" className="text-white font-body">
              Jobs
            </a>
            <a href="google.com" className="text-white font-body">
              Press
            </a>
            <a href="google.com" className="text-white font-body">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="google.com" className="text-white font-body">
              Contact Us
            </a>
            <a href="google.com" className="text-white font-body">
              Terms
            </a>
            <a href="google.com" className="text-white font-body">
              Privacy
            </a>
          </div>
          <div className="flex justify-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 p-1 rounded-full border-2 border-white">
              <GrFacebookOption className="fill-white" />
            </div>
            <div className="flex items-center justify-center w-9 h-9 p-2 rounded-full border-2 border-white">
              <GrTwitter className="fill-white" />
            </div>
            <div className="flex items-center justify-center w-9 h-9 p-2 rounded-full border-2 border-white">
              <GrInstagram className="fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
