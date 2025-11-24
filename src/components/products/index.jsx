import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import ProductsCategory from "../products_category";

const Products = () => {
  return (
    <div className="max-w-[1110px] mx-auto px-[16px] py-[40px]">
      <div className="flex items-center justify-between mb-[17px]">
        <h2 className="text-[22px] md:text-[28px] font-bold text-text">
          Our products
        </h2>
        <button className="text-green-brand text-[16px] font-medium cursor-pointer border border-light-grey py-[10px] px-[20px] rounded-[6px]">
          View all (12)
        </button>
      </div>
      <ProductsCategory />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
        {products.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="border border-light-grey rounded-[12px] p-[20px] shadow-sm relative"
          >
            <div className="absolute top-[15px] right-[15px] text-[20px] text-yellow-500 cursor-pointer">
              <FaRegHeart />
            </div>
            <div className="flex justify-center mb-[15px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-[180px] object-contain"
              />
            </div>
            <div className="flex items-center gap-1 my-[16px]">
              <IoIosStar className="text-yellow-400 text-[20px]" />
              <IoIosStar className="text-yellow-400 text-[20px]" />
              <IoIosStar className="text-yellow-400 text-[20px]" />
              <IoIosStar className="text-yellow-400 text-[20px]" />
              <IoIosStar className="text-yellow-400 text-[20px]" />
              <span className="text-gray-500 text-[13px]">(123)</span>
            </div>
            <p className="text-[16px] text-text mt-[10px] leading-[22px]">
              {item.title}
            </p>
            <div className="flex items-center justify-between mt-[15px]">
              <p className="text-[20px] font-bold text-text">
                ${item.price.toFixed(2)}
              </p>
              <div className="w-[32px] h-[32px] border border-light-grey rounded-[6px] flex items-center justify-center cursor-pointer text-green-brand hover:bg-green-50">
                <IoCartOutline className="text-[20px]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
