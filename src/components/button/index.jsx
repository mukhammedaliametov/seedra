import React from "react";

const Button = ({ children, variant = "primary", className = "", ...rest }) => {
  const baseStyles =
    "py-[13px] px-[28px] text-[14px] md:text-[16px] md:py-[15px] md:px-[35px] rounded-[8px] cursor-pointer hover:opacity-90";

  const variants = {
    primary: "bg-green-brand text-white",
    secondary: "bg-white text-green-brand",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;