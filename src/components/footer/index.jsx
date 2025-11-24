import React from "react";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ boxShadow: "0 -4px 10px rgba(0,0,0,0.15)" }} className="bg-white px-[16px] xl:px-0 py-[40px] flex flex-col text-[14px] shadow-2xl shadow-[#BDBDBD40]">
      <div className="max-w-[1110px] mx-auto w-full flex flex-col gap-[15px] md:gap-0 md:flex-row items-start md:items-center justify-between border-b border-green-brand pb-[15px] mb-[15px]">
        <img src={logo} alt="logo" className="block md:hidden" />
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[20px]">
          <a href="#">ALL PRODUCTS</a>
          <a href="#">ABOUT SEEDRA</a>
          <a href="#">OUR BLOG</a>
        </div>
        <img src={logo} alt="logo" className="hidden md:block" />
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[20px]">
          <a href="#">Terms&Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="max-w-[1110px] mx-auto w-full flex flex-col md:flex-row gap-[16px] items-start md:items-center justify-between">
        <div className="flex items-center gap-[20px] text-[18px] text-green-brand">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
        </div>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
