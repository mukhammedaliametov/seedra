import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [nav, setNav] = useState();
    const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "ALL PRODUCTS", link: "/" },
    { name: "ABOUT SEEDRA", link: "javascript:void(0)" },
    { name: "OUR BLOG", link: "javascript:void(0)" },
    { name: "CONTACTS", link: "javascript:void(0)" },
  ];
  return (
    <div className="bg-white shadow-md sticky top-0 w-full h-[72px] flex items-center z-999">
      <div className="max-w-[1110px] text-text-secondary mx-auto px-[16px] xl:px-0 flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="hidden md:flex text-[14px] font-[500] items-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `ml-[15px] pr-[15px] border-r border-light-grey last:border-0 ${
                  isActive ? "text-green-brand" : "text-text-secondary"
                }`
              }
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-[10px]">
            <IoSearchOutline className="block lg:hidden text-[20px]" />
          <a href="#" className="hidden lg:block text-[20px]">
            <FaInstagram />
          </a>
          <a href="#" className="hidden lg:block text-[20px] pr-[10px]">
            <FaFacebook />
          </a>
          <div className="hidden lg:flex items-center gap-[10px] text-[14px] border rounded-full border-light-grey px-[15px] py-[8px]">
            <IoSearchOutline className="text-[20px]" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center ml-[5px] lg:ml-[10px] gap-[15px] lg:gap-[10px]">
            <FaRegHeart className="text-green-brand text-[20px] cursor-pointer" />
            <IoCartOutline className="text-green-brand text-[22px] cursor-pointer" />
          </div>
          <div onClick={handleClick} className="block md:hidden text-[20px] pl-[5px]">
            {nav ? <IoMdClose /> : <RiMenu3Fill />}
          </div>
          <nav className={`absolute top-[72px] left-0 w-full px-[16px] py-[30px] bg-white flex flex-col transition-all duration-500 h-screen -z-10 ${nav ? 'left-[0px]' : 'left-[-100%]'}`}>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `mb-[15px] pb-[15px] border-b border-light-grey last:border-0 ${
                  isActive ? "text-green-brand" : "text-text-secondary"
                }`
              }
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
