import React from "react";
import { HiClock } from "react-icons/hi2";
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import Button from "../button";

const Blog = () => {
  return (
    <div className="max-w-[1110px] mx-auto px-[16px] py-[40px]">
      <div className="flex items-center justify-between mb-[17px]">
        <h2 className="text-[22px] md:text-[28px] font-bold text-text">
          Our blog
        </h2>
        <button className="text-green-brand text-[16px] font-medium cursor-pointer border border-light-grey py-[10px] px-[20px] rounded-[6px]">
          Go to our blogs
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
        <div className="relative flex items-center justify-between col-span-1 md:col-span-2 row-span-1 bg-light-grey rounded-[12px] py-[20px] pl-[30px]">
            <div className="flex flex-col justify-between w-[400px]">
                <p className="flex items-center gap-[8px] text-text-secondary text-[16px] mb-[8px]">
                    <HiClock /> 12.09.2021
                </p>
                <p className="text-[24px]/[34px] font-semibold">How to plant spinach correctly in winter</p>
                <p className="my-[16px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                <div>
                   <Button variant='secondary' children='Read' />
                </div>
            </div>
            <div className="hidden md:block absolute right-0 bottom-0">
                <img src={blog1} className='w-full' alt="blog1" />
            </div>
        </div>
        <div className="relative row-span-1 md:row-span-2 col-span-1 bg-light-grey rounded-[12px] p-[20px]">
            <div>
                <p className="flex items-center gap-[8px] text-text-secondary text-[16px] mb-[8px]">
                    <HiClock /> 12.09.2021
                </p>
                <p className="text-[24px]/[34px] font-semibold">How to plant spinach correctly in winter</p>
                <p className="my-[16px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                <Button variant='secondary' children='Read' />
            </div>
            <div className="hidden md:block absolute bottom-0">
                <img src={blog2} alt="blog1" />
            </div>
        </div>
        <div className="relative col-span-1 row-span-1 h-[320px] bg-light-grey rounded-[12px] p-[20px] overflow-hidden">
            <div>
                <p className="flex items-center gap-[8px] text-text-secondary text-[16px] mb-[8px]">
                    <HiClock /> 12.09.2021
                </p>
                <p className="text-[24px]/[34px] font-semibold mb-[15px]">How to plant spinach correctly in winter</p>
                <Button variant='secondary' children='Read' />
            </div>
            <div className="absolute right-0 bottom-0">
                <img src={blog3} alt="blog1" />
            </div>
        </div>
        <div className="relative col-span-1 row-span-1 h-[320px] bg-light-grey rounded-[12px] p-[20px] overflow-hidden">
            <div>
                <p className="flex items-center gap-[8px] text-text-secondary text-[16px] mb-[8px]">
                    <HiClock /> 12.09.2021
                </p>
                <p className="text-[24px]/[34px] font-semibold mb-[15px]">How to plant spinach correctly in winter</p>
                <Button variant='secondary' children='Read' />
            </div>
            <div className="absolute right-0 bottom-0">
                <img src={blog3} alt="blog1" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
